import * as Browser from "./types";
import * as fs from "fs";
import * as path from "path";

enum Flavor {
    Web,
    Worker,
    ES6Iterators
};

function EmitWebIDl(webidl: Browser.WebIdl, flavor: Flavor) {

    // Note:
    // Eventhandler's name and the eventName are not just off by "on".
    // For example, handlers named "onabort" may handle "SVGAbort" event in the XML file
    type EventHandler = { name: string; eventName: string; eventType: string };

    /// Decide which members of a function to emit
    enum EmitScope {
        StaticOnly,
        InstanceOnly,
        All
    }

    const pollutor = getElements(webidl.interfaces, "interface").find(i => flavor === Flavor.Web ? !!i["primary-global"] : !!i.global);

    const defaultEventType = "Event";

    // Global print target
    const Pt = createTextWriter("\n");

    // Extended types used but not defined in the spec
    const extendedTypes = new Set(["ArrayBuffer", "ArrayBufferView", "DataView", "Int8Array", "Uint8Array", "Int16Array", "Uint16Array", "Uint8ClampedArray", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]);
    const integerTypes = new Set(["byte", "octet", "short", "unsigned short", "long", "unsigned long", "long long", "unsigned long long"]);

    let allNonCallbackInterfaces = getElements(webidl.interfaces, "interface").concat(getElements(webidl["mixins"], "mixin"));
    let allInterfaces = getElements(webidl.interfaces, "interface").concat(
        getElements(webidl["callback-interfaces"], "interface"),
        getElements(webidl["mixins"], "mixin"));

    const allInterfacesMap = toNameMap(allInterfaces);
    const allDictionariesMap = webidl.dictionaries ? webidl.dictionaries.dictionary : {};
    const allEnumsMap = webidl.enums ? webidl.enums.enum : {};
    const allCallbackFunctionsMap = webidl["callback-functions"] ? webidl["callback-functions"]!["callback-function"] : {};
    const allTypeDefsMap = new Set(webidl.typedefs && webidl.typedefs.typedef.map(td => td["new-type"]));

    const extendConflictsBaseTypes: Record<string, { extendType: string[], memberNames: Set<string> }> = {
        "AudioContext": { extendType: ["OfflineContext"], memberNames: new Set(["suspend"]) },
        "HTMLCollection": { extendType: ["HTMLFormControlsCollection"], memberNames: new Set(["namedItem"]) },
    };

    /// Event name to event type map
    const eNameToEType = (function() {
        function eventType(e: Browser.Event) {
            switch (e.name) {
                case "abort": return "UIEvent";
                case "complete": return "Event";
                case "click": return "MouseEvent";
                case "error": return "ErrorEvent";
                case "load": return "Event";
                case "loadstart": return "Event";
                case "progress": return "ProgressEvent";
                case "readystatechange": return "ProgressEvent";
                case "resize": return "UIEvent";
                case "timeout": return "ProgressEvent";
                default: return e.type;
            }
        }
        const result: Record<string, string> = {};
        for (const i of allNonCallbackInterfaces) {
            if (i.events) {
                for (const e of i.events.event) {
                    result[e.name] = eventType(e);
                }
            }
        }
        return result;
    })();

    /// Tag name to element name map
    const tagNameToEleName = (function() {
        const preferedElementMap: Record<string, string> = {
            "script": "HTMLScriptElement",
            "a": "HTMLAnchorElement",
            "title": "HTMLTitleElement",
            "style": "HTMLStyleElement",
            "td": "HTMLTableDataCellElement",
            "th": "HTMLTableHeaderCellElement"
        };

        function resolveElementConflict(tagName: string, iNames: string[]) {
            const name = preferedElementMap[tagName] || "";
            if (iNames.indexOf(name) != -1) return name;
            throw new Error("Element conflict occured! Typename: " + tagName);
        }

        const result: Record<string, string> = {};
        for (const i of allNonCallbackInterfaces) {
            if (i.element) {
                for (const e of i.element) {
                    result[e.name] = result[e.name] ? resolveElementConflict(e.name, [result[e.name], i.name]) : i.name;
                }
            }
        }
        return result;
    })();

    /// Interface name to all its implemented / inherited interfaces name list map
    /// e.g. If i1 depends on i2, i2 should be in dependencyMap.[i1.Name]
    const iNameToIDependList = (function() {
        function getExtendList(iName: string): string[] {
            var i = allInterfacesMap[iName];
            if (!i || !i.extends || i.extends === "Object") return [];
            else return getExtendList(i.extends).concat(i.extends);
        }

        function getImplementList(iName: string) {
            var i = allInterfacesMap[iName];
            return i && i.implements || [];
        }

        let nativeINameToIDependList: Record<string, string[]> = {};

        for (const i of allNonCallbackInterfaces) {
            nativeINameToIDependList[i.name] = getExtendList(i.name).concat(getImplementList(i.name));
        }
        return nativeINameToIDependList;
    })();

    /// Distinct event type list, used in the "createEvent" function
    const distinctETypeList = (function() {
        let eventsMap: Record<string, true> = {};

        for (const i of allNonCallbackInterfaces) {
            if (i.events) {
                for (const e of i.events.event) {
                    eventsMap[e.type] = true;
                }
            }

            if (i.extends === "Event" && i.name.endsWith("Event")) {
                eventsMap[i.name] = true;
            }
        }

        return Object.keys(eventsMap).sort();
    })();

    /// Interface name to its related eventhandler name list map
    /// Note:
    /// In the xml file, each event handler has
    /// 1. eventhanlder name: "onready", "onabort" etc.
    /// 2. the event name that it handles: "ready", "SVGAbort" etc.
    /// And they don't NOT just differ by an "on" prefix!
    const iNameToEhList = (function() {
        function getEventTypeFromHandler(p: Browser.Property) {
            let eType =
                // Check the "event-handler" attribute of the event handler property,
                // which is the corresponding event name
                p["event-handler"] &&
                // The list is partly obtained from the table at
                // http://www.w3.org/TR/DOM-Level-3-Events/#dom-events-conformance   #4.1
                eNameToEType[p["event-handler"]!] || defaultEventType;

            return eType === "Event" || dependsOn(eType, "Event")
                ? eType
                : defaultEventType;
        }

        // Get all the event handlers from an interface and also from its inherited / implemented interfaces
        function getEventHandler(i: Browser.Interface) {
            let ownEventHandler =
                i.properties
                    ? mapToArray(i.properties.property).filter(p => p["event-handler"]).map(p => ({
                        name: p.name,
                        eventName: p["event-handler"]!,
                        eventType: getEventTypeFromHandler(p)
                    }))
                    : [];
            return ownEventHandler;
        }

        const result: Record<string, EventHandler[]> = {};
        for (const i of allInterfaces) {
            result[i.name] = getEventHandler(i);
        }
        return result;
    })();

    // Map of interface.Name -> List of base interfaces with event handlers
    const iNameToEhParents = (function() {
        function hasHandler(i: Browser.Interface) {
            return iNameToEhList[i.name] && iNameToEhList[i.name].length;
        }
        // Get all the event handlers from an interface and also from its inherited / implemented interfaces
        function getParentsWithEventHandler(i: Browser.Interface) {
            function getParentEventHandler(i: Browser.Interface): Browser.Interface[] {
                return hasHandler(i) ? [i] : getParentsWithEventHandler(i);
            }

            let extendedParentWithEventHandler = allInterfacesMap[i.extends] && getParentEventHandler(allInterfacesMap[i.extends]) || [];

            let implementedParentsWithEventHandler =
                i.implements
                    ? i.implements.reduce<Browser.Interface[]>((acc, i) => {
                        acc.push(...getParentEventHandler(allInterfacesMap[i]));
                        return acc;
                    }, [])
                    : [];

            return extendedParentWithEventHandler.concat(implementedParentsWithEventHandler);
        }

        const result: Record<string, Browser.Interface[]> = {};
        for (const i of allInterfaces) {
            result[i.name] = getParentsWithEventHandler(i);
        }
        return result;
    })();

    return flavor === Flavor.ES6Iterators ? emitES6DomIterators() : emitTheWholeThing();

    // Used to decide if a member should be emitted given its static property and
    // the intended scope level.
    function matchScope(scope: EmitScope, x: Browser.Method) {
        if (scope === EmitScope.All)
            return true;
        else if (x.static) return scope === EmitScope.StaticOnly;
        else return scope === EmitScope.InstanceOnly;
    }

    /// Parameter cannot be named "default" in JavaScript/Typescript so we need to rename it.
    function AdjustParamName(name: string) {
        switch (name) {
            case "default": return "_default";
            case "delete": return "_delete";
            case "continue": return "_continue";
            default: return name;
        }
    }

    function distinct<T>(a: T[]): T[] {
        return Array.from(new Set(a).values());
    }

    function getElements<K extends string, T>(a: Record<K, Record<string, T>> | undefined, k: K): T[] {
        return a ? mapToArray(a[k]) : [];
    }

    function mapToArray<T>(m: Record<string, T>): T[] {
        return Object.keys(m || {}).map(k => m[k]);
    }

    function map<T, U>(obj: Record<string, T> | undefined, fn: (o: T) => U): U[] {
        return Object.keys(obj || {}).map(k => fn(obj![k]));
    }

    function tryGetMatchingEventType(eName: string, i: Browser.Interface) {
        if (i.events) {
            const event = i.events.event.find(e => e.name === eName);
            return event && event.type;
        }
        return undefined;
    }

    function getEventTypeInInterface(eName: string, i: Browser.Interface) {
        if (eName === "abort" && (i.name === "IDBDatabase" || i.name === "IDBTransaction" || i.name === "MSBaseReader" || i.name === "XMLHttpRequestEventTarget")) return "Event";
        else if (eName === "readystatechange" && i.name === "XMLHttpRequest") return "Event";
        else if (i.name === "XMLHttpRequest") return "ProgressEvent";
        else {
            let ownEventType = tryGetMatchingEventType(eName, i);
            return ownEventType || eNameToEType[eName] || "Event";
        }
    }

    function toNameMap<T extends { name: string }>(array: T[]) {
        const result: Record<string, T> = {};
        for (const value of array) {
            result[value.name] = value;
        }
        return result;
    }

    /// Determine if interface1 depends on interface2
    function dependsOn(i1Name: string, i2Name: string) {
        return iNameToIDependList[i2Name] && iNameToIDependList[i1Name]
            ? iNameToIDependList[i1Name].indexOf(i2Name) > -1
            : i2Name === "Object";
    }

    // Some params have the type of "(DOMString or DOMString [] or Number)"
    // we need to transform it into [“DOMString", "DOMString []", "Number"]
    function decomposeTypes(t: string) {
        return t.replace(/[\(\)]/g, "").split(" or ");
    }

    function createTextWriter(newLine: string) {
        let output: string;
        let indent: number;
        let lineStart: boolean;
        let stack: { content: string, indent: number }[] = [];

        const indentStrings: string[] = ["", "    "];
        function getIndentString(level: number) {
            if (indentStrings[level] === undefined) {
                indentStrings[level] = getIndentString(level - 1) + indentStrings[1];
            }
            return indentStrings[level];
        }

        function write(s: string) {
            if (lineStart) {
                output += getIndentString(indent);
                lineStart = false;
            }
            output += s;
        }

        function reset(): void {
            output = "";
            indent = 0;
            lineStart = true;
            stack = [];
        }

        function writeLine() {
            if (!lineStart) {
                output += newLine;
                lineStart = true;
            }
        }

        reset();

        return {

            Reset: reset,

            ResetIndent() { indent = 0; },
            IncreaseIndent() { indent++; },
            DecreaseIndent() { indent--; },

            Print: write,
            Printl(c: string) { writeLine(); write(c); },

            PrintWithAddedIndent(c: string) { this.IncreaseIndent(); this.Printl(c); this.DecreaseIndent(); },

            ClearStack() { stack = []; },
            StackIsEmpty() { return stack.length === 0; },
            PrintlToStack(content: string) { stack.push({ content, indent }); },
            PrintStackContent() {
                stack.forEach(e => {
                    const oldIndent = indent;
                    indent = e.indent;
                    this.Printl(e.content);
                    indent = oldIndent;
                })
            },

            GetResult() { return output; }
        };
    }

    /// Get typescript type using object dom type, object name, and it's associated interface name
    function convertDomTypeToTsType(obj: Browser.Typed): string {
        if (obj["override-type"]) return obj["override-type"]!;
        if (!obj.type) throw new Error("Missing type " + JSON.stringify(obj));
        const type = convertDomTypeToTsTypeWorker(obj)
        return type.nullable ? makeNullable(type.name) : type.name;
    }

    function convertDomTypeToTsTypeWorker(obj: Browser.Typed): { name: string; nullable: boolean } {
        let type;
        if (typeof obj.type === "string") {
            type = { name: covertDomTypeToTsTypeSimple(obj.type), nullable: !!obj.nullable };
        }
        else {
            const types = obj.type.map(convertDomTypeToTsTypeWorker);
            const isAny = types.find(t => t.name === "any");
            if (isAny) {
                type = {
                    name: "any",
                    nullable: false
                }
            }
            else {
                type = {
                    name: types.map(t => t.name).join(" | "),
                    nullable: !!types.find(t => t.nullable)
                };
            }
        }

        const subtype = obj.subtype ? convertDomTypeToTsTypeWorker(obj.subtype) : undefined;
        const subtypeString = subtype ? subtype.nullable ? makeNullable(subtype.name) : subtype.name : undefined;

        return {
            name: (type.name === "Array" && subtypeString) ? makeArrayType(subtypeString) : `${type.name}${subtypeString ? `<${subtypeString}>` : ""}`,
            nullable: type.nullable
        };
    }

    function makeArrayType(elementType: string): string {
        return elementType.indexOf("|") > -1 ? `Array<${elementType}>` : `${elementType}[]`;
    }

    function covertDomTypeToTsTypeSimple(objDomType: string): string {
        if (typeof objDomType !== "string") {
            throw new Error("Invalid type " + JSON.stringify(objDomType));
        }
        switch (objDomType) {
            case "AbortMode": return "String";
            case "bool":
            case "boolean":
            case "Boolean": return "boolean";
            case "CanvasPixelArray": return "number[]";
            case "DOMHighResTimeStamp": return "number";
            case "DOMString": return "string";
            case "DOMTimeStamp": return "number";
            case "EndOfStreamError": return "number";
            case "EventListener": return "EventListenerOrEventListenerObject";
            case "double":
            case "float": return "number";
            case "object": return "any";
            case "ReadyState": return "string";
            case "ByteString": return "string";
            case "USVString": return "string";
            case "sequence": return "Array";
            case "FrozenArray": return "ReadonlyArray";
            case "UnrestrictedDouble":
            case "unrestricted double": return "number";
            case "any":
            case "BufferSource":
            case "Date":
            case "Function":
            case "Promise":
            case "void": return objDomType;
            default:
                if (integerTypes.has(objDomType)) return "number";
                if (extendedTypes.has(objDomType)) return objDomType;
                if (flavor === Flavor.Worker && (objDomType === "Element" || objDomType === "Window" || objDomType === "Document" || objDomType === "AbortSignal" || objDomType === "HTMLFormElement")) return "any";
                if (flavor === Flavor.Web && objDomType === "Client") return "any";
                // Name of an interface / enum / dict. Just return itself
                if (allInterfacesMap[objDomType] ||
                    allCallbackFunctionsMap[objDomType] ||
                    allDictionariesMap[objDomType] ||
                    allEnumsMap[objDomType])
                    return objDomType;
                // Name of a type alias. Just return itself
                if (allTypeDefsMap.has(objDomType)) return objDomType;
                // Union types
                if (objDomType.indexOf(" or ") > -1) {
                    let allTypes: string[] = decomposeTypes(objDomType).map(t => covertDomTypeToTsTypeSimple(t.replace("?", "")));
                    return allTypes.indexOf("any") > -1 ? "any" : allTypes.join(" | ");
                }
                else {
                    // Check if is array type, which looks like "sequence<DOMString>"
                    let unescaped = objDomType; // System.Web.HttpUtility.HtmlDecode(objDomType)
                    let genericMatch = /^(\w+)<([\w, <>]+)>$/;
                    let match = genericMatch.exec(unescaped);
                    if (match) {
                        let tName: string = covertDomTypeToTsTypeSimple(match[1]);
                        let paramName: string = covertDomTypeToTsTypeSimple(match[2]);
                        return tName === "Array" ? paramName + "[]" : tName + "<" + paramName + ">";
                    }
                    if (objDomType.endsWith("[]")) {
                        return covertDomTypeToTsTypeSimple(objDomType.replace("[]", "").trim()) + "[]";
                    }
                }
        }

        throw new Error("Unkown DOM type: " + objDomType);
    }

    function makeNullable(originalType: string) {
        switch (originalType) {
            case "any": return "any";
            case "void": return "void";
            default:
                if (originalType.indexOf("| null") > -1) return originalType;
                else if (originalType.indexOf("=>") > -1) return "(" + originalType + ") | null";
                else return originalType + " | null";
        }
    }

    function convertDomTypeToNullableTsType(obj: Browser.Typed) {
        let resolvedType = convertDomTypeToTsType(obj);
        return obj.nullable ? makeNullable(resolvedType) : resolvedType;
    }

    function emitConstant(c: Browser.Constant) {
        Pt.Printl(`readonly ${c.name}: ${convertDomTypeToTsType(c)};`);
    }

    function emitConstants(i: Browser.Interface) {
        if (i.constants)
            mapToArray(i.constants.constant)
                .sort(compareName)
                .forEach(emitConstant);
    }

    function matchSingleParamMethodSignature(m: Browser.Method, expectedMName: string, expectedMType: string, expectedParamType: string) {
        return expectedMName === m.name &&
            m.signature && m.signature.length === 1 &&
            convertDomTypeToNullableTsType(m.signature[0]) === expectedMType &&
            m.signature[0].param && m.signature[0].param!.length === 1 &&
            convertDomTypeToTsType(m.signature[0].param![0]) === expectedParamType;
    }

    function processInterfaceType(i: Browser.Interface | Browser.Dictionary, name: string) {
        return i["type-parameters"] ? name + "<" + i["type-parameters"]!.join(", ") + ">" : name;
    }

    /// Emit overloads for the createElement method
    function emitCreateElementOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "createElement", "Element", "string")) {
            Pt.Printl("createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];");
            Pt.Printl("createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;");
        }
    }

    /// Emit overloads for the getElementsByTagName method
    function emitGetElementsByTagNameOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "getElementsByTagName", "NodeList", "string")) {
            Pt.Printl(`getElementsByTagName<K extends keyof HTMLElementTagNameMap>(${m.signature[0].param![0].name}: K): NodeListOf<HTMLElementTagNameMap[K]>;`);
            Pt.Printl(`getElementsByTagName<K extends keyof SVGElementTagNameMap>(${m.signature[0].param![0].name}: K): NodeListOf<SVGElementTagNameMap[K]>;`);
            Pt.Printl(`getElementsByTagName(${m.signature[0].param![0].name}: string): NodeListOf<Element>;`);
        }
    }

    /// Emit overloads for the querySelector method
    function emitQuerySelectorOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "querySelector", "Element | null", "string")) {
            Pt.Printl("querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;");
            Pt.Printl("querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;");
            Pt.Printl("querySelector<E extends Element = Element>(selectors: string): E | null;");
        }
    }

    /// Emit overloads for the querySelectorAll method
    function emitQuerySelectorAllOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "querySelectorAll", "NodeList", "string")) {
            Pt.Printl("querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;");
            Pt.Printl("querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;");
            Pt.Printl("querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;");
        }
    }

    function emitHTMLElementTagNameMap() {
        Pt.Printl("interface HTMLElementTagNameMap {");
        Pt.IncreaseIndent();
        for (const e of Object.keys(tagNameToEleName).sort()) {
            const value = tagNameToEleName[e];
            if (iNameToIDependList[value] && iNameToIDependList[value].indexOf("SVGElement") === -1) {
                Pt.Printl(`"${e.toLowerCase()}": ${value};`);
            }
        }
        Pt.DecreaseIndent();
        Pt.Printl("}");
        Pt.Printl("");
    }

    function emitSVGElementTagNameMap() {
        Pt.Printl("interface SVGElementTagNameMap {");
        Pt.IncreaseIndent();
        for (const e of Object.keys(tagNameToEleName).sort()) {
            const value = tagNameToEleName[e];
            if (iNameToIDependList[value] && iNameToIDependList[value].indexOf("SVGElement") > -1) {
                Pt.Printl(`"${e.toLowerCase()}": ${value};`);
            }
        }
        Pt.DecreaseIndent();
        Pt.Printl("}");
        Pt.Printl("");
    }

    function emitElementTagNameMap() {
        Pt.Printl("/** @deprecated Directly use HTMLElementTagNameMap or SVGElementTagNameMap as appropriate, instead. */");
        Pt.Printl("interface ElementTagNameMap extends HTMLElementTagNameMap, SVGElementTagNameMap { }");
        Pt.Printl("");
    }

    /// Emit overloads for the createEvent method
    function emitCreateEventOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "createEvent", "Event", "string")) {
            // Emit plurals. For example, "Events", "MutationEvents"
            let hasPlurals = ["Event", "MutationEvent", "MouseEvent", "SVGZoomEvent", "UIEvent"];
            for (const x of distinctETypeList) {
                Pt.Printl(`createEvent(eventInterface: "${x}"): ${x};`);
                if (hasPlurals.indexOf(x) > -1) {
                    Pt.Printl(`createEvent(eventInterface: "${x}s"): ${x};`);
                }
            }
            Pt.Printl("createEvent(eventInterface: string): Event;");
        }
    }

    /// Generate the parameters string for function signatures
    function paramsToString(ps: Browser.Param[]) {
        function paramToString(p: Browser.Param) {
            let isOptional = !p.variadic && p.optional;
            let pType = isOptional ? convertDomTypeToTsType(p) : convertDomTypeToNullableTsType(p);
            return (p.variadic ? "..." : "") +
                AdjustParamName(p.name) +
                (isOptional ? "?: " : ": ") +
                pType +
                (p.variadic ? "[]" : "");
        }
        return ps.map(paramToString).join(", ");
    }

    function emitCallBackInterface(i: Browser.Interface) {
        if (i.name === "EventListener") {
            Pt.Printl(`interface ${i.name} {`);
            Pt.PrintWithAddedIndent("(evt: Event): void;");
            Pt.Printl("}");
        }
        else {
            let methods = mapToArray(i.methods.method);
            let m = methods[0];
            let overload = m.signature[0];
            let paramsString = overload.param ? paramsToString(overload.param) : "";
            let returnType = overload.type ? convertDomTypeToTsType(overload) : "void";
            Pt.Printl(`type ${i.name} = ((${paramsString}) => ${returnType}) | { ${m.name}(${paramsString}): ${returnType}; };`);
        }
        Pt.Printl("");
    }

    function emitCallBackFunction(cb: Browser.CallbackFunction) {
        Pt.Printl(`interface ${cb.name} {`);
        Pt.IncreaseIndent();
        emitSignatures(cb, "", "", s => Pt.Printl(s));
        Pt.DecreaseIndent();
        Pt.Printl("}");
        Pt.Printl("");
    }

    function emitCallBackFunctions() {
        getElements(webidl["callback-functions"], "callback-function")
            .sort(compareName)
            .forEach(emitCallBackFunction);
    }

    function emitEnum(e: Browser.Enum) {
        Pt.Printl(`type ${e.name} = ${e.value.map(v => `"${v}"`).join(" | ")};`);
    }

    function emitEnums() {
        getElements(webidl.enums, "enum")
            .sort(compareName)
            .forEach(emitEnum);
    }

    function emitEventHandlerThis(prefix: string, i: Browser.Interface) {
        if (prefix === "") {
            return `this: ${i.name} , `;
        }
        else {
            return pollutor ? `this: ${pollutor.name}, ` : "";
        }
    }

    // A covariant  EventHandler is one that is defined in a parent interface as then redefined in current interface with a more specific argument types
    // These patterns are unsafe, and flagged as error under --strictFunctionTypes.
    // Here we know the property is already defined on the interface, we elide its declaration if the parent has the same handler defined
    function isCovariantEventHandler(i: Browser.Interface, p: Browser.Property) {
        return isEventHandler(p) &&
            iNameToEhParents[i.name] && iNameToEhParents[i.name].length > 0 &&
            !!iNameToEhParents[i.name].find(
                i => iNameToEhList[i.name] && iNameToEhList[i.name].length > 0 &&
                    !!iNameToEhList[i.name].find(e => e.name === p.name));
    }

    function isEventHandler(p: Browser.Property) {
        return p.type === "EventHandlerNonNull" || p.type === "EventHandler";
    }

    function emitProperty(prefix: string, i: Browser.Interface, emitScope: EmitScope, p: Browser.Property, conflictedMembers: Set<string>) {
        function printLine(content: string) {
            if (conflictedMembers.has(p.name))
                Pt.PrintlToStack(content);
            else
                Pt.Printl(content);
        }

        emitComments(p, printLine);

        // Treat window.name specially because of https://github.com/Microsoft/TypeScript/issues/9850
        if (p.name === "name" && i.name === "Window" && emitScope === EmitScope.All) {
            printLine("declare const name: never;");
        }
        else {

            let pType: string;
            if (p["override-type"]) {
                pType = p["override-type"]!;
            }
            else {
                if (isEventHandler(p)) {
                    // Sometimes event handlers with the same name may actually handle different
                    // events in different interfaces. For example, "onerror" handles "ErrorEvent"
                    // normally, but in "SVGSVGElement" it handles "SVGError" event instead.
                    let eType = p["event-handler"] ? getEventTypeInInterface(p["event-handler"]!, i) : "Event";
                    pType = `(${emitEventHandlerThis(prefix, i)}ev: ${eType}) => any`;
                }
                else {
                    pType = convertDomTypeToTsType(p);
                }
            }
            let requiredModifier = !p.required || p.required === "1" ? "" : "?";
            pType = p.nullable ? makeNullable(pType) : pType;
            let readOnlyModifier = p["read-only"] && prefix === "" ? "readonly " : "";
            printLine(`${prefix}${readOnlyModifier}${p.name}${requiredModifier}: ${pType};`);
        }
    }

    function emitComments(entity: { comment?: string; deprecated?: 1 } | undefined, print: (s: string) => void) {
        if (entity) {
            if (entity.comment) {
                print(entity.comment);
            }
            if (entity.deprecated) {
                print(`/** @deprecated */`);
            }
        }
    }

    function emitProperties(prefix: string, emitScope: EmitScope, i: Browser.Interface, conflictedMembers: Set<string>) {
        // Note: the schema file shows the property doesn't have "static" attribute,
        // therefore all properties are emited for the instance type.
        if (emitScope !== EmitScope.StaticOnly) {
            if (i.properties) {
                mapToArray(i.properties.property)
                    .filter(p => !isCovariantEventHandler(i, p))
                    .filter(p => !(prefix.startsWith("declare var") && p["do-no-expose-on-polluter"]))
                    .sort(compareName)
                    .forEach(p => emitProperty(prefix, i, emitScope, p, conflictedMembers));
            }
        }
    }

    function emitMethod(prefix: string, _i: Browser.Interface, m: Browser.Method, conflictedMembers: Set<string>) {
        function printLine(content: string) {
            if (m.name && conflictedMembers.has(m.name))
                Pt.PrintlToStack(content);
            else
                Pt.Printl(content);
        }

        emitComments(m, printLine);

        switch (m.name) {
            case "createElement": return emitCreateElementOverloads(m);
            case "createEvent": return emitCreateEventOverloads(m);
            case "getElementsByTagName": return emitGetElementsByTagNameOverloads(m);
            case "querySelector": return emitQuerySelectorOverloads(m);
            case "querySelectorAll": return emitQuerySelectorAllOverloads(m);
        }
        emitSignatures(m, prefix, m.name, printLine);
    }

    function emitSignature(s: Browser.Signature, prefix: string | undefined, name: string | undefined, printLine: (s: string) => void) {
        let paramsString = s.param ? paramsToString(s.param) : "";
        let returnType = convertDomTypeToTsType(s);
        returnType = s.nullable ? makeNullable(returnType) : returnType;
        printLine(`${prefix || ""}${name || ""}(${paramsString}): ${returnType};`);
    }

    function emitSignatures(method: { signature?: Browser.Signature[], "override-signatures"?: string[], "additional-signatures"?: string[] }, prefix: string, name: string, printLine: (s: string) => void) {
        if (method["override-signatures"]) {
            method["override-signatures"]!.forEach(s => printLine(`${prefix}${s};`));
        }
        else if (method.signature) {
            if (method["additional-signatures"]) {
                method["additional-signatures"]!.forEach(s => printLine(`${prefix}${s};`));
            }
            method.signature.forEach(sig => emitSignature(sig, prefix, name, printLine));
        }
    }

    function emitMethods(prefix: string, emitScope: EmitScope, i: Browser.Interface, conflictedMembers: Set<string>) {
        // If prefix is not empty, then this is the global declare function addEventListener, we want to override this
        // Otherwise, this is EventTarget.addEventListener, we want to keep that.
        function mFilter(m: Browser.Method) {
            return matchScope(emitScope, m) &&
                !(prefix !== "" && (m.name === "addEventListener" || m.name === "removeEventListener"));
        }

        if (i.methods) {
            mapToArray(i.methods.method)
                .filter(mFilter)
                .sort(compareName)
                .forEach(m => emitMethod(prefix, i, m, conflictedMembers));
        }

        // The window interface inherited some methods from "Object",
        // which need to explicitly exposed
        if (i.name === "Window" && prefix === "declare function ") {
            Pt.Printl("declare function toString(): string;");
        }
    }

    /// Emit the properties and methods of a given interface
    function emitMembers(prefix: string, emitScope: EmitScope, i: Browser.Interface) {
        let conflictedMembers = extendConflictsBaseTypes[i.name] ? extendConflictsBaseTypes[i.name].memberNames : new Set();
        emitProperties(prefix, emitScope, i, conflictedMembers);
        let methodPrefix = prefix.startsWith("declare var") ? "declare function " : "";
        emitMethods(methodPrefix, emitScope, i, conflictedMembers);
    }

    /// Emit all members of every interfaces at the root level.
    /// Called only once on the global polluter object
    function emitAllMembers(i: Browser.Interface) {
        let prefix = "declare var ";
        emitMembers(prefix, EmitScope.All, i);

        for (const relatedIName of iNameToIDependList[i.name]) {
            const i = allInterfacesMap[relatedIName];
            if (i) {
                emitAllMembers(i);
            }
        }
    }

    function emitEventHandlers(prefix: string, i: Browser.Interface) {
        function getOptionsType(addOrRemove: string) {
            return addOrRemove === "add" ? "AddEventListenerOptions" : "EventListenerOptions";
        }

        let fPrefix = prefix.startsWith("declare var") ? "declare function " : "";

        function emitTypedEventHandler(prefix: string, addOrRemove: string, iParent: Browser.Interface) {
            Pt.Printl(`${prefix}${addOrRemove}EventListener<K extends keyof ${iParent.name}EventMap>(type: K, listener: (this: ${i.name}, ev: ${iParent.name}EventMap[K]) => any, options?: boolean | ${getOptionsType(addOrRemove)}): void;`);
        }

        function emitStringEventHandler(addOrRemove: string) {
            Pt.Printl(`${fPrefix}${addOrRemove}EventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | ${getOptionsType(addOrRemove)}): void;`);
        }

        function tryEmitTypedEventHandlerForInterface(addOrRemove: string) {
            if (iNameToEhList[i.name] && iNameToEhList[i.name].length) {
                emitTypedEventHandler(fPrefix, addOrRemove, i)
                return true;
            }
            if (iNameToEhParents[i.name] && iNameToEhParents[i.name].length) {
                iNameToEhParents[i.name]
                    .sort(compareName)
                    .forEach(i => emitTypedEventHandler(fPrefix, addOrRemove, i));
                return true;
            }
            return false;
        }

        function emitEventHandler(addOrRemove: string) {
            if (tryEmitTypedEventHandlerForInterface(addOrRemove)) {
                // only emit the string event handler if we just emited a typed handler
                emitStringEventHandler(addOrRemove);
            }
        }

        emitEventHandler("add");
        emitEventHandler("remove");
    }

    function EmitConstructorSignature(i: Browser.Interface) {
        const constructor = typeof i.constructor === "object" ? i.constructor : undefined;

        emitComments(constructor, s => Pt.Print(s));

        // Emit constructor signature
        if (constructor) {
            emitSignatures(constructor, "", "new", s => Pt.Printl(s));
        }
        else {
            Pt.Printl(`new(): ${i.name};`);
        }
    }

    function EmitConstructor(i: Browser.Interface) {
        Pt.Printl(`declare var ${i.name}: {`);
        Pt.IncreaseIndent();

        Pt.Printl(`prototype: ${i.name};`);
        EmitConstructorSignature(i);
        emitConstants(i);
        emitMembers("", EmitScope.StaticOnly, i);

        Pt.DecreaseIndent();
        Pt.Printl("};");
        Pt.Printl("");
    }

    function EmitNamedConstructor(i: Browser.Interface) {
        const nc = i["named-constructor"];
        if (nc) {
            Pt.Printl(`declare var ${nc.name}: {`);
            nc.signature.forEach(s => Pt.PrintWithAddedIndent(`new(${s.param ? paramsToString(s.param) : ""}): ${i.name};`));
            Pt.Printl(`};`);
        }
    }

    /// Emit all the named constructors at root level
    function EmitNamedConstructors() {
        getElements(webidl.interfaces, "interface")
            .sort(compareName)
            .forEach(EmitNamedConstructor);
    }

    function EmitInterfaceDeclaration(i: Browser.Interface) {
        function processIName(iName: string) {
            return extendConflictsBaseTypes[iName] ? `${iName}Base` : iName;
        }

        let processedIName = processIName(i.name);

        if (processedIName != i.name) {
            Pt.PrintlToStack(`interface ${processInterfaceType(i, i.name)} extends ${processedIName} {`);
        }

        Pt.Printl(`interface ${processInterfaceType(i, processedIName)}`);

        let finalExtends = [i.extends || "Object"].concat(i.implements || [])
            .filter(i => i !== "Object")
            .map(processIName)

        if (finalExtends && finalExtends.length) {
            Pt.Print(` extends ${finalExtends.join(", ")}`);
        }
        Pt.Print(" {");
    }

    /// To decide if a given method is an indexer and should be emited
    function ShouldEmitIndexerSignature(i: Browser.Interface, m: Browser.Method) {
        if (m.getter && m.signature && m.signature[0].param && m.signature[0].param!.length === 1) {
            // TypeScript array indexer can only be number or string
            // for string, it must return a more generic type then all
            // the other properties, following the Dictionary pattern
            switch (convertDomTypeToTsType(m.signature[0].param![0])) {
                case "number": return true;
                case "string":
                    if (convertDomTypeToTsType(m.signature[0]) === "any") {
                        return true;
                    }
                    let sig = m.signature[0];
                    let mTypes = distinct(i.methods && map(i.methods.method, m => m.signature && m.signature.length && m.signature[0].type || "void").filter(t => t !== "void") || []);
                    let amTypes = distinct(i["anonymous-methods"] && i["anonymous-methods"]!.method.map(m => m.signature[0].type).filter(t => t !== "void") || []); // |>  Array.distinct
                    let pTypes = distinct(i.properties && map(i.properties.property, m => m.type).filter(t => t !== "void") || []); // |>  Array.distinct

                    if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 0) return amTypes[0] === sig.type;
                    if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 0) return mTypes[0] === amTypes[0] && amTypes[0] === sig.type;
                    if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 1) return amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
                    if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 1) return mTypes[0] === amTypes[0] && amTypes[0] === pTypes[0] && amTypes[0] === sig.type;
            }
        }
        return false;
    }

    function EmitIndexers(emitScope: EmitScope, i: Browser.Interface) {
        if (i["overide-index-signatures"]) {
            i["overide-index-signatures"]!.forEach(s => Pt.Printl(`${s};`));
        }
        else {
            // The indices could be within either Methods or Anonymous Methods
            mapToArray(i.methods && i.methods.method)
                .concat(i["anonymous-methods"] && i["anonymous-methods"]!.method || [])
                .filter(m => ShouldEmitIndexerSignature(i, m) && matchScope(emitScope, m))
                .forEach(m => {
                    let indexer = (m.signature && m.signature.length && m.signature[0].param && m.signature[0].param!.length) ? m.signature[0].param![0] : undefined;
                    if (indexer) {
                        Pt.Printl(`[${indexer.name}: ${convertDomTypeToTsType(indexer)}]: ${convertDomTypeToTsType({
                            type: m.signature[0].type,
                            subtype: m.signature[0].subtype,
                            nullable: undefined
                        })};`);
                    }
                });
        }
    }

    function EmitInterfaceEventMap(i: Browser.Interface) {
        function emitInterfaceEventMapEntry(eHandler: EventHandler) {
            Pt.Printl(`"${eHandler.eventName}": ${getEventTypeInInterface(eHandler.eventName, i)};`);
        }

        if (iNameToEhList[i.name] && iNameToEhList[i.name].length) {
            Pt.Printl(`interface ${i.name}EventMap`);
            if (iNameToEhParents[i.name] && iNameToEhParents[i.name].length) {
                let extend = iNameToEhParents[i.name].map(i => i.name + "EventMap");
                Pt.Print(` extends ${extend.join(", ")}`);
            }
            Pt.Print(" {");
            Pt.IncreaseIndent();
            iNameToEhList[i.name]
                .sort(compareName)
                .forEach(emitInterfaceEventMapEntry);
            Pt.DecreaseIndent();
            Pt.Printl("}");
            Pt.Printl("");
        }
    }

    function EmitInterface(i: Browser.Interface) {
        Pt.ClearStack();
        EmitInterfaceEventMap(i);

        Pt.ResetIndent()
        EmitInterfaceDeclaration(i);
        Pt.IncreaseIndent();

        let prefix = "";
        emitMembers(prefix, EmitScope.InstanceOnly, i);
        emitConstants(i);
        emitEventHandlers(prefix, i);
        EmitIndexers(EmitScope.InstanceOnly, i);

        Pt.DecreaseIndent();
        Pt.Printl("}");
        Pt.Printl("");

        if (!Pt.StackIsEmpty()) {
            Pt.PrintStackContent();
            Pt.Printl("}");
            Pt.Printl("");
        }
    }

    function EmitStaticInterface(i: Browser.Interface) {
        // Some types are static types with non-static members. For example,
        // NodeFilter is a static method itself, however it has an "acceptNode" method
        // that expects the user to implement.
        let hasNonStaticMethod = i.methods && !!mapToArray(i.methods.method).find(m => !m.static);
        let hasProperty = i.properties && mapToArray(i.properties.property).find(p => !p.static);
        let hasNonStaticMember = hasNonStaticMethod || hasProperty

        // For static types with non-static members, we put the non-static members into an
        // interface, and put the static members into the object literal type of 'declare var'
        // For static types with only static members, we put everything in the interface.
        // Because in the two cases the interface contains different things, it might be easier to
        // read to separate them into two functions.
        function emitStaticInterfaceWithNonStaticMembers() {
            Pt.ResetIndent();
            EmitInterfaceDeclaration(i);
            Pt.IncreaseIndent();

            let prefix = "";
            emitMembers(prefix, EmitScope.InstanceOnly, i);
            emitEventHandlers(prefix, i);
            EmitIndexers(EmitScope.InstanceOnly, i);

            Pt.DecreaseIndent();
            Pt.Printl("}");
            Pt.Printl("");
            Pt.Printl(`declare var ${i.name}: {`);
            Pt.IncreaseIndent();
            emitConstants(i);
            emitMembers(prefix, EmitScope.StaticOnly, i);
            Pt.DecreaseIndent();
            Pt.Printl("};");
            Pt.Printl("");
        }

        function emitPureStaticInterface() {
            Pt.ResetIndent()
            EmitInterfaceDeclaration(i);
            Pt.IncreaseIndent();

            let prefix = "";
            emitMembers(prefix, EmitScope.StaticOnly, i);
            emitConstants(i);
            emitEventHandlers(prefix, i);
            EmitIndexers(EmitScope.StaticOnly, i);
            Pt.DecreaseIndent();
            Pt.Printl("}");
            Pt.Printl(`declare var ${i.name}: ${i.name};`);
            Pt.Printl("");
        }

        if (hasNonStaticMember) {
            emitStaticInterfaceWithNonStaticMembers();
        }
        else {
            emitPureStaticInterface()
        }
    }

    function emitNonCallbackInterfaces() {
        for (const i of allNonCallbackInterfaces.sort(compareName)) {
            // If the static attribute has a value, it means the type doesn't have a constructor
            if (i.static) {
                EmitStaticInterface(i);
            }
            else if (i["no-interface-object"]) {
                EmitInterface(i);
            }
            else {
                EmitInterface(i);
                EmitConstructor(i);
            }
        }
    }

    function emitDictionary(dict: Browser.Dictionary) {
        if (!dict.extends || dict.extends === "Object") {
            Pt.Printl(`interface ${processInterfaceType(dict, dict.name)} {`);
        }
        else {
            Pt.Printl(`interface ${processInterfaceType(dict, dict.name)} extends ${dict.extends} {`);
        }
        Pt.IncreaseIndent()
        if (dict.members) {
            mapToArray(dict.members.member)
                .sort(compareName)
                .forEach(m => Pt.Printl(`${m.name}${m.required === 1 ? "" : "?"}: ${convertDomTypeToTsType(m)};`));
        }
        Pt.DecreaseIndent();
        Pt.Printl("}");
        Pt.Printl("");
    }

    function emitDictionaries() {
        getElements(webidl.dictionaries, "dictionary")
            .sort(compareName)
            .forEach(emitDictionary);
    }

    function emitTypeDef(typeDef: Browser.TypeDef) {
        Pt.Printl(`type ${typeDef["new-type"]} = ${convertDomTypeToTsType(typeDef)};`);
    }

    function emitTypeDefs() {
        if (webidl.typedefs) {
            webidl.typedefs.typedef
                .forEach(emitTypeDef);
        }
    }

    function compareName(c1: { name: string }, c2: { name: string }) {
        return c1.name < c2.name ? -1 : c1.name > c2.name ? 1 : 0;
    }

    function emitTheWholeThing() {
        Pt.Reset()
        Pt.Printl("/////////////////////////////");
        if (flavor === Flavor.Worker) {
            Pt.Printl("/// Worker APIs");
        }
        else {
            Pt.Printl("/// DOM APIs");
        }
        Pt.Printl("/////////////////////////////");
        Pt.Printl("");

        emitDictionaries();
        getElements(webidl["callback-interfaces"], "interface")
            .sort(compareName)
            .forEach(i => emitCallBackInterface(i));
        emitNonCallbackInterfaces();

        // // Add missed interface definition from the spec
        // InputJson.getAddedItems InputJson.Interface flavor |> Array.iter EmitAddedInterface

        Pt.Printl("declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;");
        Pt.Printl("");

        emitCallBackFunctions();

        if (flavor !== Flavor.Worker) {
            emitHTMLElementTagNameMap();
            emitSVGElementTagNameMap();
            emitElementTagNameMap();
            EmitNamedConstructors();
        }

        if (pollutor) {
            emitAllMembers(pollutor);
            emitEventHandlers("declare var ", pollutor);
        }

        emitTypeDefs();
        emitEnums();

        return Pt.GetResult();
    }

    function emitIterator(i: Browser.Interface) {

        // check anonymous unsigned long getter and length property
        let isIterableGetter = (m: Browser.Method) =>
            m.getter === 1 && !!m.signature.length && !!m.signature[0].param && m.signature[0].param!.length === 1 && typeof m.signature[0].param![0].type === "string" && integerTypes.has(<string>m.signature[0].param![0].type);

        function findIterableGetter() {
            let anonymousGetter = i["anonymous-methods"] && i["anonymous-methods"]!.method.find(isIterableGetter);

            if (anonymousGetter) return anonymousGetter;
            else if (i.methods) return mapToArray(i.methods.method).find(isIterableGetter);
            else return undefined;
        }

        function findLengthProperty(p: Browser.Property) {
            return p.name === "length" && typeof p.type === "string" && integerTypes.has(p.type);
        }

        if (i.name !== "Window" && i.properties) {
            let iterableGetter = findIterableGetter()
            let lengthProperty = mapToArray(i.properties.property).find(findLengthProperty);
            if (iterableGetter && lengthProperty) {
                Pt.Printl(`interface ${i.name} {`);
                Pt.IncreaseIndent();
                Pt.Printl(`[Symbol.iterator](): IterableIterator<${convertDomTypeToTsType({ type: iterableGetter.signature[0].type, nullable: undefined })}>`);
                Pt.DecreaseIndent();
                Pt.Printl("}");
                Pt.Printl("");
            }
        }
    }

    function emitES6DomIterators() {
        Pt.Reset();
        Pt.Printl("/////////////////////////////");
        Pt.Printl("/// DOM ES6 APIs");
        Pt.Printl("/////////////////////////////");
        Pt.Printl("");

        allInterfaces
            .sort(compareName)
            .forEach(emitIterator);

        return Pt.GetResult();
    }
}

function emitDomWorker(webidl: Browser.WebIdl, knownWorkerTypes: Set<string>, tsWorkerOutput: string) {
    const worker: Browser.WebIdl = {
        "callback-functions": {
            "callback-function": {}
        },
        "callback-interfaces": {
            "interface": {}
        },
        "dictionaries": {
            "dictionary": {}
        },
        "enums": {
            "enum": {}
        },
        "interfaces": {
            "interface": {}
        },
        "mixins": {
            "mixin": {}
        },
        "typedefs": {
            "typedef": []
        }
    };

    const isKnownWorkerName = (o: { name: string }) => knownWorkerTypes.has(o.name);

    if (webidl["callback-functions"]) worker["callback-functions"]!["callback-function"] = filterProperties(webidl["callback-functions"]!["callback-function"], isKnownWorkerName);
    if (webidl["callback-interfaces"]) worker["callback-interfaces"]!.interface = filterProperties(webidl["callback-interfaces"]!.interface, isKnownWorkerName);
    if (webidl.dictionaries) worker.dictionaries!.dictionary = filterProperties(webidl.dictionaries.dictionary, isKnownWorkerName);
    if (webidl.enums) worker.enums!.enum = filterProperties(webidl.enums.enum, isKnownWorkerName);
    if (webidl.mixins) worker.mixins!.mixin = filterProperties(webidl.mixins.mixin, isKnownWorkerName);
    if (webidl.interfaces) worker.interfaces!.interface = filterProperties(webidl.interfaces.interface, isKnownWorkerName);
    if (webidl.typedefs) worker.typedefs!.typedef = webidl.typedefs.typedef.filter(t => knownWorkerTypes.has(t["new-type"]));

    const result = EmitWebIDl(worker, Flavor.Worker);
    fs.writeFileSync(tsWorkerOutput, result);
    return;
}

function filterProperties<T>(obj: Record<string, T>, fn: (o: T) => boolean): Record<string, T> {
    const result: Record<string, T> = {};
    for (const e in obj) {
        if (fn(obj[e])) {
            result[e] = obj[e];
        }
    }
    return result;
}

function emitDomWeb(webidl: Browser.WebIdl, tsWebOutput: string) {
    const browser = filter(webidl, o => {
        if (o) {
            if (typeof o.tags === "string") {
                if (o.tags.indexOf("MSAppOnly") > -1) return false;
                if (o.tags.indexOf("MSAppScheduler") > -1) return false;
                if (o.tags.indexOf("Diagnostics") > -1) return false;
                if (o.tags.indexOf("Printing") > -1) return false;
            }
            if (typeof o.exposed === "string") {
                if (o.exposed.indexOf("Diagnostics") > -1) return false;
                if (o.exposed.indexOf("WorkerDiagnostics") > -1) return false;
                if (o.exposed.indexOf("Isolated") > -1) return false;
                if (o.exposed.indexOf("Worker") > -1 && o.exposed.indexOf("Window") <= -1) return false;
            }
            if (o.iterable === "pair-iterator") return false;
        }
        return true;
    });

    const result = EmitWebIDl(browser, Flavor.Web);
    fs.writeFileSync(tsWebOutput, result);
    return;

    function filter(obj: any, fn: (o: any) => boolean) {
        var result = obj;
        if (typeof obj === "object") {
            if (Array.isArray(obj)) {
                result = obj.filter(fn);
            }
            else {
                result = {};
                for (const e in obj) {
                    if (fn(obj[e])) {
                        result[e] = filter(obj[e], fn);
                    }
                }
            }
        }
        return result;
    }
}

function emitES6DomIterators(webidl: Browser.WebIdl, tsWebES6Output: string) {
    fs.writeFileSync(tsWebES6Output, EmitWebIDl(webidl, Flavor.ES6Iterators));
}

function emitDom() {
    const __SOURCE_DIRECTORY__ = __dirname;
    const inputFolder = path.join(__SOURCE_DIRECTORY__, "../", "inputfiles");
    const outputFolder = path.join(__SOURCE_DIRECTORY__, "../", "generated");

    // Create output folder
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    const tsWebOutput = path.join(outputFolder, "dom.generated.d.ts");
    const tsWebES6Output = path.join(outputFolder, "dom.es6.generated.d.ts");
    const tsWorkerOutput = path.join(outputFolder, "webworker.generated.d.ts");


    const overriddenItems = require(path.join(inputFolder, "overridingTypes.json"));
    const addedItems = require(path.join(inputFolder, "addedTypes.json"));
    const comments = require(path.join(inputFolder, "comments.json"));
    const removedItems = require(path.join(inputFolder, "removedTypes.json"));

    /// Load the input file
    let webidl: Browser.WebIdl = require(path.join(inputFolder, "browser.webidl.json"));

    const knownWorkerTypes = new Set<string>(require(path.join(inputFolder, "knownWorkerTypes.json")));

    webidl = prune(webidl, removedItems);
    webidl = merge(webidl, addedItems);
    webidl = merge(webidl, overriddenItems);
    webidl = merge(webidl, comments);

    emitDomWeb(webidl, tsWebOutput);
    emitDomWorker(webidl, knownWorkerTypes, tsWorkerOutput);
    emitES6DomIterators(webidl, tsWebES6Output);

    function mergeNamedArrays<T extends { name: string }>(srcProp: T[], targetProp: T[]) {
        const map: any = {};
        for (const e1 of srcProp) {
            if (e1.name) {
                map[e1.name] = e1;
            }
        }

        for (const e2 of targetProp) {
            if (e2.name && map[e2.name]) {
                merge(map[e2.name], e2);
            }
            else {
                srcProp.push(e2);
            }
        }
    }

    function merge<T>(src: T, target: T): T {
        if (typeof src !== "object" || typeof target !== "object") return src;
        for (const k in target) {
            if (Object.getOwnPropertyDescriptor(target, k)) {
                if (Object.getOwnPropertyDescriptor(src, k)) {
                    const srcProp = src[k];
                    const targetProp = target[k];
                    if (Array.isArray(srcProp) && Array.isArray(targetProp)) {
                        mergeNamedArrays(srcProp, targetProp);
                    }
                    else {
                        if (Array.isArray(srcProp) !== Array.isArray(targetProp)) throw new Error("Mismatch on property: " + k + JSON.stringify(targetProp));
                        merge(src[k], target[k]);
                    }
                }
                else {
                    src[k] = target[k];
                }
            }
        }
        return src;
    }

    function prune(obj: Browser.WebIdl, template: Partial<Browser.WebIdl>): Browser.WebIdl {
        const result: Browser.WebIdl = {
            "callback-functions": {
                "callback-function": {}
            },
            "callback-interfaces": {
                "interface": {}
            },
            "dictionaries": {
                "dictionary": {}
            },
            "enums": {
                "enum": {}
            },
            "interfaces": {
                "interface": {}
            },
            "mixins": {
                "mixin": {}
            },
            "typedefs": {
                "typedef": []
            }
        };

        if (obj["callback-functions"]) result["callback-functions"]!["callback-function"] = filterProperties(obj["callback-functions"]!["callback-function"], (cb) => !(template["callback-functions"] && template["callback-functions"]!["callback-function"][cb.name]));
        if (obj["callback-interfaces"]) result["callback-interfaces"]!.interface = filterInterface(obj["callback-interfaces"]!.interface, template["callback-interfaces"] && template["callback-interfaces"]!.interface);
        if (obj.dictionaries) result.dictionaries!.dictionary = filterDictinary(obj.dictionaries.dictionary, template.dictionaries && template.dictionaries.dictionary);
        if (obj.enums) result.enums!.enum = filterEnum(obj.enums.enum, template.enums && template.enums.enum);
        if (obj.mixins) result.mixins!.mixin = filterInterface(obj.mixins.mixin, template.mixins && template.mixins.mixin);
        if (obj.interfaces) result.interfaces!.interface = filterInterface(obj.interfaces.interface, template.interfaces && template.interfaces.interface);
        if (obj.typedefs) result.typedefs!.typedef = obj.typedefs.typedef.filter(t => template.typedefs && template.typedefs.typedef.find(o => o["new-type"] === t["new-type"]));

        return result;

        function filterInterface(interfaces: Record<string, Browser.Interface>, template: Record<string, Browser.Interface> | undefined) {
            if (!template) return interfaces;
            const result = interfaces;
            for (const k in result) {
                if (result[k].properties)
                    result[k].properties!.property = filterProperties(interfaces[k].properties!.property, p => !(template[k] && template[k].properties && template[k].properties!.property[p.name]));
                if (result[k].methods)
                    result[k].methods!.method = filterProperties(interfaces[k].methods!.method, m => !(template[k] && template[k].methods && template[k].methods!.method[m.name]));
            }
            return result;
        }

        function filterDictinary(dictinaries: Record<string, Browser.Dictionary>, template: Record<string, Browser.Dictionary> | undefined) {
            if (!template) return dictinaries;
            const result = filterProperties(dictinaries, i => !template[i.name]);
            for (const k in result) {
                if (result[k].members)
                    result[k].members!.member = filterProperties(dictinaries[k].members!.member, m => !(template[k] && template[k].members && template[k].members!.member[m.name]));
            }
            return result;
        }
        function filterEnum(enums: Record<string, Browser.Enum>, template: Record<string, Browser.Enum> | undefined) {
            if (!template) return enums;
            return filterProperties(enums, i => !template[i.name]);
        }
    }
}

emitDom();