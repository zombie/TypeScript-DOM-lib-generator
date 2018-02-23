import * as Browser from "./types";
import * as fs from "fs";
import * as path from "path";

const __SOURCE_DIRECTORY__ = __dirname;
let inputFolder = path.join(__SOURCE_DIRECTORY__, "inputfiles", "json");
let outputFolder = path.join(__SOURCE_DIRECTORY__, "generated", "new");

// Create output folder
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

let tsWebOutput = path.join(outputFolder, "dom.generated.d.ts");
let tsWebES6Output = path.join(outputFolder, "dom.es6.generated.d.ts");
let tsWorkerOutput = path.join(outputFolder, "webworker.generated.d.ts");
const defaultEventType = "Event";

type Function =
    | Browser.Method
    | Browser.Constructor
    | Browser.CallbackFunction;

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

enum Flavor {
    Web,
    Worker,
    All
};

let overriddenItems = require(inputFolder + "/overridingTypes.json");
let addedItems = require(inputFolder + "/addedTypes.json");
let comments = require(inputFolder + "/comments.json");
let removedItems = require(inputFolder + "/removedTypes.json");

/// Parse the xml input file
let browser: Browser.WebIdl = JSON.parse(fs.readFileSync(inputFolder + "/browser.webidl.xml.json").toString());

let worker: Browser.WebIdl = JSON.parse(fs.readFileSync(inputFolder + "/webworkers.specidl.xml.json").toString());

let knownWorkerInterfaces = new Set<string>(JSON.parse(fs.readFileSync(inputFolder + "/knownWorkerInterfaces.json").toString()));

let knownWorkerEnums = new Set<string>(JSON.parse(fs.readFileSync(inputFolder + "/knownWorkerEnums.json").toString()));

browser = prune(browser, removedItems);
browser = merge(browser, addedItems, "add");
browser = merge(browser, overriddenItems, "update");
browser = merge(browser, comments, "update");



/**
    // This is the kind of items in the external json files that are used as a
    // correction for the spec.
    type ItemKind =
        | Property
        | Method
        | Constant
        | Constructor
        | Interface
        | Callback
        | Indexer
        | SignatureOverload
        | TypeDef
        | Extends
        override x.ToString() =
            match x with
            | Property _ -> "property"
            | Method _ -> "method"
            | Constant _ -> "constant"
            | Constructor _ -> "constructor"
            | Interface _ -> "interface"
            | Callback _ -> "callback"
            | Indexer _ -> "indexer"
            | SignatureOverload _ -> "signatureoverload"
            | TypeDef _ -> "typedef"
            | Extends _ -> "extends"

    let getItemByName (allItems: InputJsonType.Root []) (itemName: string) (kind: ItemKind) otherFilter =
        let filter (item: InputJsonType.Root) =
            (OptionCheckValue itemName item.Name || OptionCheckValue (sprintf "${}?" itemName) item.Name) &&
            item.Kind.ToLower() = kind.ToString() &&
            otherFilter item
        allItems |> Array.tryFind filter

    let matchInterface iName (item: InputJsonType.Root) =
        item.Interface.IsNone || item.Interface.Value = iName

    let getOverriddenItemByName itemName (kind: ItemKind) iName =
        getItemByName overriddenItems itemName kind (matchInterface iName)

    let getRemovedItemByName itemName (kind: ItemKind) iName =
        getItemByName removedItems itemName kind (matchInterface iName)

    let getAddedItemByName itemName (kind: ItemKind) iName =
        getItemByName addedItems itemName kind (matchInterface iName)

    let getItems (allItems: InputJsonType.Root []) (kind: ItemKind) (flavor: Flavor) =
        allItems
        |> Array.filter (fun t ->
            t.Kind.ToLower() = kind.ToString() &&
            (t.Flavor.IsNone || t.Flavor.Value = flavor.ToString() || t.Flavor.Value = Flavor.All.ToString() || flavor = Flavor.All))

    let getOverriddenItems = getItems overriddenItems

    let getAddedItems = getItems addedItems

    let getRemovedItems = getItems removedItems

    let getAddedItemsByInterfaceName kind flavor iName =
        getAddedItems kind flavor |> Array.filter (matchInterface iName)

    let getOverriddenItemsByInterfaceName kind flavor iName =
        getOverriddenItems kind flavor |> Array.filter (matchInterface iName)

    let getRemovedItemsByInterfaceName kind flavor iName =
        getRemovedItems kind flavor |> Array.filter (matchInterface iName)
*/

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

/// Check if the given element should be disabled or not
/// reason is that ^a can be an interface, property or method, but they
/// all share a 'tag' property
function ShouldKeep(flavor: Flavor, i: { tags?: string }) {
    if (i.tags) {
        if (flavor === Flavor.All) return true;
        if (flavor === Flavor.Worker) return i.tags !== "IEOnly";
        else return true;
    }
    else return true;
}

function concat<T>(a: T[] | undefined, b: T[] | undefined, c?: T[] | undefined): T[] {
    let result = a || [];
    if (b) result = result.concat(b);
    if (c) result = result.concat(c);
    return result;
}

function distinct<T>(a: T[]): T[] {
    return Array.from(new Set(a).values());
}

function getElements<K extends string, T>(a: Record<K, Record<string, T>> | undefined, k: K): T[] {
    return a ? mapToArray(a[k]) : [];
}

function mapToArray<T>(m: Record<string, T>): T[] {
    return Object.keys(m).map(k => m[k]);
}

function mergeNamedArrays<T extends { name: string }>(srcProp: T[], targetProp: T[], mode: "add" | "update") {
    const map: any = {};
    for (const e1 of srcProp) {
        if (e1.name) {
            map[e1.name] = e1;
        }
    }

    for (const e2 of targetProp) {
        if (e2.name && map[e2.name]) {
            merge(map[e2.name], e2, mode);
        }
        else if (mode === "add") {
            srcProp.push(e2);
        }
    }
}

function merge<T>(src: T, target: T, mode: "add" | "update"): T {
    if (typeof src !== "object" || typeof target !== "object") return src;
    for (const k in target) {
        if (src[k] && target[k]) {
            const srcProp = src[k];
            const targetProp = target[k];
            if (Array.isArray(srcProp) && Array.isArray(targetProp)) {
                mergeNamedArrays(srcProp, targetProp, mode);
            }
            else {
                if (Array.isArray(srcProp) !== Array.isArray(targetProp)) throw new Error("Mismatch on property: " + k);
                merge(src[k], target[k], mode);
            }
        }
        else {
            if (typeof target[k] !== "object" || Array.isArray(target[k]) || mode === "add") {
                src[k] = target[k];
            }
        }
    }
    return src;
}

function prune(obj: Browser.WebIdl, template: Partial<Browser.WebIdl>): Browser.WebIdl {
    if (template.interfaces && obj.interfaces) {
        pruneInterfaces(obj.interfaces.interface, template.interfaces.interface);
    }
    if (template["callback-interfaces"] && obj["callback-interfaces"]) {
        pruneInterfaces(obj["callback-interfaces"]!.interface, template["callback-interfaces"]!.interface);
    }
    if (template.typedefs && obj.typedefs) {
        obj.typedefs.typedef = pruneKeyedArray(obj.typedefs.typedef, template.typedefs.typedef, "new-type");
    }

    return obj;

    function pruneInterfaces(obj: Record<string, Browser.Interface>, template: Record<string, Browser.Interface>) {
        for (const i in template) {
            if (obj[i]) {
                if (!template[i].properties && !template[i].methods) {
                    delete obj[i];
                }
                if (template[i].properties && obj[i].properties) {
                    obj[i].properties!.property = pruneKeyedArray(obj[i].properties!.property, template[i].properties!.property, "name");
                    if (obj[i].properties!.property.length === 0) {
                        delete obj[i].properties;
                    }
                }
                if (template[i].methods && obj[i].methods) {
                    obj[i].methods!.method = pruneKeyedArray(obj[i].methods!.method, template[i].methods!.method, "name");
                    if (obj[i].methods!.method.length === 0) {
                        delete obj[i].methods;
                    }
                }
            }
        }
    }

    function pruneKeyedArray<T, K extends keyof T>(obj: T[], template: T[], k: K) {
        const map: any = {};
        for (const e of template) {
            map[e[k]] = true;
        }
        return obj.filter(e => !map[e[k]]);
    }
}

let allWebNonCallbackInterfaces = concat(getElements(browser.interfaces, "interface"), getElements(browser["mixin-interfaces"], "interface"));

let allWebInterfaces = concat(getElements(browser.interfaces, "interface"),
    getElements(browser["callback-interfaces"], "interface"),
    getElements(browser["mixin-interfaces"], "interface"));


let allWorkerAdditionalInterfaces = concat(
    getElements(worker.interfaces, "interface"),
    getElements(worker["mixin-interfaces"], "interface"));

let allInterfaces = allWebInterfaces.concat(allWorkerAdditionalInterfaces);

function toNameMap<T extends { name: string }>(array: T[]) {
    const result: Record<string, T> = {};
    for (const value of array) {
        result[value.name] = value;
    }
    return result;
}

function arrayToMap<T>(array: [string, T][]) {
    const result: Record<string, T> = {};
    for (const value of array) {
        result[value[0]] = value[1];
    }
    return result;
}

// Global interfacename to interface object map


let allInterfacesMap = toNameMap(allInterfaces);

let allDictionariesMap: Record<string, Browser.Dictionary> = { ...browser.dictionaries && browser.dictionaries.dictionary, ...worker.dictionaries && worker.dictionaries.dictionary };

let allEnumsMap: Record<string, Browser.Enum> = { ...browser.enums && browser.enums.enum, ...worker.enums && worker.enums.enum };

let allCallbackFuncs: Record<string, Browser.CallbackFunction> = { ...browser["callback-functions"] && browser["callback-functions"]!["callback-function"], ...worker["callback-functions"] && worker["callback-functions"]!["callback-function"] };

function GetInterfaceByName(name: string) {
    return allInterfacesMap[name];
}

function GetNonCallbackInterfacesByFlavor(flavor: Flavor) {
    switch (flavor) {
        case Flavor.Web: return allWebNonCallbackInterfaces.filter(i => ShouldKeep(Flavor.Web, i));
        case Flavor.All: return allWebNonCallbackInterfaces.filter(i => ShouldKeep(Flavor.All, i));
        case Flavor.Worker:
            let isFromBrowserXml = allWebNonCallbackInterfaces.filter(i => knownWorkerInterfaces.has(i.name));
            return isFromBrowserXml.concat(allWorkerAdditionalInterfaces);
    }
}

function GetCallbackFuncsByFlavor(flavor: Flavor) {
    return browser["callback-functions"] ? getElements(browser["callback-functions"], "callback-function").filter(cb => (flavor != Flavor.Worker || knownWorkerInterfaces.has(cb.name)) && ShouldKeep(flavor, cb)) : [];
}

function GetEnumsByFlavor(flavor: Flavor) {
    switch (flavor) {
        case Flavor.Web:
        case Flavor.All: return getElements(browser.enums, "enum");
        case Flavor.Worker:
            let isFromBrowserXml = getElements(browser.enums, "enum").filter(i => knownWorkerEnums.has(i.name));
            return isFromBrowserXml.concat(getElements(worker.enums, "enum"));
    }
}


/// Event name to event type map
let eNameToEType = (function() {
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
    for (const i of allWebNonCallbackInterfaces) {
        if (i.events) {
            for (const e of i.events.event) {
                result[e.name] = eventType(e);
            }
        }
    }
    return result;
})();


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


/// Tag name to element name map
let tagNameToEleName = (function() {
    function preferedElementMap(name: string) {
        switch (name) {
            case "script": return "HTMLScriptElement";
            case "a": return "HTMLAnchorElement";
            case "title": return "HTMLTitleElement";
            case "style": return "HTMLStyleElement";
            default: return "";
        }
    }

    function resolveElementConflict(tagName: string, iNames: string[]) {
        const name = preferedElementMap(tagName);
        if (iNames.indexOf(name) != -1) return name;
        throw new Error("Element conflict occured! Typename: " + tagName);
    }

    let nativeTagNamesToInterface = (function() {
        const result: Record<string, string> = {};
        for (const i of GetNonCallbackInterfacesByFlavor(Flavor.All)) {
            if (i.element) {
                for (const e of i.element) {
                    result[e.name] = result[e.name] ? resolveElementConflict(e.name, [result[e.name], i.name]) : i.name;
                }
            }
        }
        return result;
    })();

    // let addedTagNamesToInterface =
    // (function() {
    //     const result: Record<string, string[]> = {};
    //     for (const i of getAddedItems(InputJson.ItemKind.Interface, Flavor.All))
    //     |> Array.filter (fun i -> Seq.length i.TagNames > 0) do
    //         yield! [ for e in i.TagNames do
    //                     match i.Name with
    //                     | Some name -> yield (e, name)
    //                     | _ -> () ] ]

    // nativeTagNamesToInterface @ addedTagNamesToInterface
    // |> Seq.groupBy fst
    // |> Seq.map ((fun (key, group) -> (key, Seq.map snd group)) >> fun (key, group) ->
    //     key,
    //     match Seq.length group with
    //     | 1 -> Seq.head group
    //     | _ -> resolveElementConflict key group)
    // |> Map.ofSeq

    return nativeTagNamesToInterface;
})();


/// Interface name to all its implemented / inherited interfaces name list map
/// e.g. If i1 depends on i2, i2 should be in dependencyMap.[i1.Name]
let iNameToIDependList = (function() {
    function getExtendList(iName: string): string[] {
        var i = GetInterfaceByName(iName);
        if (!i || !i.extends || i.extends === "Object") return [];
        else return getExtendList(i.extends).concat(i.extends);
    }
    // else {
    //     match InputJson.getAddedItemByName iName InputJson.ItemKind.Interface iName with
    //     | Some i ->
    //         match i.Extends with
    //         | Some extends ->
    //             match extends with
    //             | "Object" -> []
    //             | super -> super :: (getExtendList super)
    //         | _ -> []
    //     | _ -> []

    function getImplementList(iName: string) {
        var i = GetInterfaceByName(iName);
        return i && i.implements || [];
    }

    // let addedINameToIDependList =
    //     InputJson.getAddedItems InputJson.ItemKind.Interface Flavor.All
    //     |> Array.ofSeq
    //     |> Array.filter (fun i -> i.Name.IsSome)
    //     |> Array.map (fun i -> (Option.get i.Name, List.concat [ (getExtendList (Option.get i.Name)); (getImplementList (Option.get i.Name)) ]))

    let nativeINameToIDependList: Record<string, string[]> = {};

    for (const i of concat(allWebNonCallbackInterfaces, getElements(worker.interfaces, "interface"), getElements(worker["mixin-interfaces"], "interface"))) {
        nativeINameToIDependList[i.name] = concat(getExtendList(i.name), getImplementList(i.name));
    }
    return nativeINameToIDependList;
})();


/// Distinct event type list, used in the "createEvent" function
let distinctETypeList = (function() {
    let eventsMap: Record<string, true> = {};

    for (const i of GetNonCallbackInterfacesByFlavor(Flavor.All)) {
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

/// Determine if interface1 depends on interface2
function IsDependsOn(i1Name: string, i2Name: string) {
    return iNameToIDependList[i2Name] && iNameToIDependList[i1Name]
        ? iNameToIDependList[i1Name].indexOf(i2Name) > -1
        : i2Name === "Object";
}

/// Interface name to its related eventhandler name list map
/// Note:
/// In the xml file, each event handler has
/// 1. eventhanlder name: "onready", "onabort" etc.
/// 2. the event name that it handles: "ready", "SVGAbort" etc.
/// And they don't NOT just differ by an "on" prefix!
let iNameToEhList = (function() {
    function getEventTypeFromHandler(p: Browser.Property) {
        let eType =
            // Check the "event-handler" attribute of the event handler property,
            // which is the corresponding event name
            p["event-handler"] &&
            // The list is partly obtained from the table at
            // http://www.w3.org/TR/DOM-Level-3-Events/#dom-events-conformance   #4.1
            eNameToEType[p["event-handler"]!] || defaultEventType;

        return eType === "Event" || IsDependsOn(eType, "Event")
            ? eType
            : defaultEventType;
    }

    // Get all the event handlers from an interface and also from its inherited / implemented interfaces
    function getEventHandler(i: Browser.Interface) {
        let ownEventHandler =
            i.properties
                ? i.properties.property.filter(p => p["event-handler"]).map(p => ({
                    name: p.name,
                    eventName: p["event-handler"]!,
                    eventType: getEventTypeFromHandler(p)
                }))
                : [];
        return ownEventHandler;
    }

    return arrayToMap(allInterfaces.map(i => [i.name, getEventHandler(i)] as [string, EventHandler[]]));
})();


// Map of interface.Name -> List of base interfaces with event handlers
let iNameToEhParents = (function() {
    function hasHandler(i: Browser.Interface) {
        return iNameToEhList[i.name] && iNameToEhList[i.name].length;
    }
    // Get all the event handlers from an interface and also from its inherited / implemented interfaces
    function getParentsWithEventHandler(i: Browser.Interface) {
        function getParentEventHandler(i: Browser.Interface): Browser.Interface[] {
            return hasHandler(i) ? [i] : getParentsWithEventHandler(i);
        }

        let extendedParentWithEventHandler =
            GetInterfaceByName(i.extends) && getParentEventHandler(GetInterfaceByName(i.extends)) || [];

        let implementedParentsWithEventHandler =
            i.implements
                ? i.implements.reduce<Browser.Interface[]>((acc, i) => {
                    acc.push(...getParentEventHandler(GetInterfaceByName(i)));
                    return acc;
                }, [])
                : [];

        return concat(extendedParentWithEventHandler, implementedParentsWithEventHandler);
    }

    return arrayToMap(allInterfaces.map(i => [i.name, getParentsWithEventHandler(i)] as [string, Browser.Interface[]]));
})();

function GetGlobalPollutor(flavor: Flavor) {
    switch (flavor) {
        case Flavor.Web:
        case Flavor.All: return browser.interfaces && getElements(browser.interfaces, "interface").find(i => !!i["primary-global"]);
        case Flavor.Worker: return worker.interfaces && getElements(worker.interfaces, "interface").find(i => !!i.global);
    }
}

// Some params have the type of "(DOMString or DOMString [] or Number)"
// we need to transform it into [“DOMString", "DOMString []", "Number"]
function decomposeTypes(t: string) {
    return t.replace(/[\(\)]/g, "").split(" or ");
}

/// Return a sequence of returntype * HashSet<paramCombination> tuple
function GetOverloads(f: Function, decomposeMultipleTypes: boolean) {

    function getReturnType(f: Function) {
        return "type" in f ? f.type : "";
    }

    function isNullable(f: Function) {
        return "nullable" in f;
    }

    function decomposeParam(p: Browser.Param) {
        return decomposeTypes(p.type).map(type => ({ ...p, type }));
    }

    let pCombList = (function() {
        let pCombs: Browser.Param[][] = [];

        function enumParams(acc: Browser.Param[], rest: Browser.Param[]) {
            if (!rest.length) {
                pCombs.push(acc);
            }
            else {
                const p = rest[0];
                rest = rest.slice(1);
                if (p.type.indexOf("or") > -1) {
                    let pOptions = decomposeParam(p);
                    for (const option of pOptions) {
                        acc.push(option);
                        enumParams(acc, rest);
                        acc.pop();
                    }
                }
            }
        }
        if (f.param) {
            enumParams([], f.param);
        }
        return pCombs;
    })();

    let rTypes = decomposeTypes(getReturnType(f));


    if (decomposeMultipleTypes) {
        return pCombList.map(pComb => ({
            paramCombinations: pComb,
            returnTypes: rTypes,
            nullable: isNullable(f)
        }));
    }
    else {
        return [{
            paramCombinations: f.param || [],
            returnTypes: rTypes,
            nullable: isNullable(f)
        }];
    }
}

const typeDefSet = new Set(
    browser.typedefs && browser.typedefs.typedef.map(td => td["new-type"])
);

const extendConflicts = [
    { baseType: "AudioContext", extendType: ["OfflineContext"], memberNames: ["suspend"] },
    { baseType: "HTMLCollection", extendType: ["HTMLFormControlsCollection"], memberNames: ["namedItem"] },
];

const extendConflictsBaseTypes =
    arrayToMap(extendConflicts.map(ec => [ec.baseType, ec] as [string, typeof extendConflicts[0]]));

namespace Emit {
    // function StringPrinter() {
    //     let indent = 0;
    //     let content = "";
    //     let stack: string[] = [];
    //     let lineStart: boolean = false;

    //     const indentStrings: string[] = ["", "    "];
    //     function getIndentString(level: number) {
    //         if (indentStrings[level] === undefined) {
    //             indentStrings[level] = getIndentString(level - 1) + indentStrings[1];
    //         }
    //         return indentStrings[level];
    //     }

    //     function getIndentSize() {
    //         return indentStrings[1].length;
    //     }

    //     return {
    //         Reset() { content = ""; indent = 0; lineStart = false; },

    //         ResetIndent() { indent = 0; },
    //         IncreaseIndent() { indent++; },
    //         DecreaseIndent() { indent--; },

    //         Print(c: string) { content += c; },
    //         Printl(c: string) { content += getIndentString(indent) + c + "\n"; },

    //         PrintWithAddedIndent(c: string) { return this.Printl(c); },

    //         ClearStack() { stack = []; },
    //         StackIsEmpty() { return stack.length === 0; },
    //         PrintlToStack(c: string) { stack.push(c); },
    //         PrintStackContent() { stack.forEach(e => this.Printl(e)) },

    //         GetResult() { return content; }
    //     };
    // }

    export function createTextWriter(newLine: string) {
        let output: string;
        let indent: number;
        let lineStart: boolean;
        let stack: string[] = [];

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
            PrintlToStack(c: string) { stack.push(c); },
            PrintStackContent() { stack.forEach(e => this.Printl(e)) },

            GetResult() { return output; }
        };
    }

    // Global print target
    const Pt = createTextWriter("\n");

    // When emit webworker types the dom types are ignored
    let ignoreDOMTypes = false;

    // Extended types used but not defined in the spec
    let extendedTypes = new Set(["ArrayBuffer", "ArrayBufferView", "Int8Array", "Uint8Array", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]);

    let integerTypes = new Set(["byte", "octet", "short", "unsigned short", "long", "unsigned long", "long long", "unsigned long long"]);


    /// Get typescript type using object dom type, object name, and it's associated interface name
    function DomTypeToTsType(objDomType: string): string {
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
            case "sequence": return "Array";
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
                if (ignoreDOMTypes && (objDomType === "Element" || objDomType === "Window" || objDomType === "Document")) return "any";
                // Name of an interface / enum / dict. Just return itself
                if (allInterfacesMap[objDomType] ||
                    allCallbackFuncs[objDomType] ||
                    allDictionariesMap[objDomType] ||
                    allEnumsMap[objDomType])
                    return objDomType;
                // Name of a type alias. Just return itself
                if (typeDefSet.has(objDomType)) return objDomType;
                // Union types
                if (objDomType.indexOf(" or ") > -1) {
                    let allTypes: string[] = decomposeTypes(objDomType).map(t => DomTypeToTsType(t.replace("?", "")));
                    return allTypes.indexOf("any") > -1 ? "any" : allTypes.join(" | ");
                }
                else {
                    // Check if is array type, which looks like "sequence<DOMString>"
                    let unescaped = objDomType; // System.Web.HttpUtility.HtmlDecode(objDomType)
                    let genericMatch = /^(\w+)<([\w, <>]+)>$/;
                    let match = genericMatch.exec(unescaped);
                    if (match) {
                        let tName: string = DomTypeToTsType(match[1]);
                        let paramName: string = DomTypeToTsType(match[2]);
                        return tName === "Array" ? paramName + "[]" : tName + "<" + paramName + ">";
                    }
                    if (objDomType.endsWith("[]")) {
                        return DomTypeToTsType(objDomType.replace("[]", "").trim()) + "[]";
                    }
                }
        }
        return "any";
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

    function DomTypeToNullableTsType(objDomType: string, nullable: boolean) {
        let resolvedType = DomTypeToTsType(objDomType);
        return nullable ? makeNullable(resolvedType) : resolvedType;
    }

    function emitConstant(c: Browser.Constant) {
        Pt.Printl(`readonly ${c.name}: ${DomTypeToTsType(c.type)};`);
    }

    function EmitConstants(i: Browser.Interface) {
        if (i.constants)
            i.constants.constant.forEach(emitConstant);
    }

    function matchSingleParamMethodSignature(m: Browser.Method, expectedMName: string, expectedMType: string, expectedParamType: string) {
        return expectedMName === m.name &&
            DomTypeToNullableTsType(m.type, !!m.nullable) === expectedMType &&
            m.param && m.param.length === 1 &&
            DomTypeToTsType(m.param[0].type) === expectedParamType;
    }

    function processInterfaceType(i: Browser.Interface | Browser.Dictionary, name: string) {
        return i["type-parameters"] ? name + "<" + i["type-parameters"]!.join(", ") + ">" : name;
    }

    /// Emit overloads for the createElement method
    function EmitCreateElementOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "createElement", "Element", "string")) {
            Pt.Printl("createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];");
            Pt.Printl("createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;");
        }
    }

    /// Emit overloads for the getElementsByTagName method
    function EmitGetElementsByTagNameOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "getElementsByTagName", "NodeList", "string")) {
            Pt.Printl(`getElementsByTagName<K extends keyof HTMLElementTagNameMap>(${m.param![0].name}: K): NodeListOf<HTMLElementTagNameMap[K]>;`);
            Pt.Printl(`getElementsByTagName<K extends keyof SVGElementTagNameMap>(${m.param![0].name}: K): NodeListOf<SVGElementTagNameMap[K]>;`);
            Pt.Printl(`getElementsByTagName(${m.param![0].name}: string): NodeListOf<Element>;`);
        }
    }

    /// Emit overloads for the querySelector method
    function EmitQuerySelectorOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "querySelector", "Element", "string")) {
            Pt.Printl("querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;");
            Pt.Printl("querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;");
            Pt.Printl("querySelector<E extends Element = Element>(selectors: string): E | null;");
        }
    }
    /// Emit overloads for the querySelectorAll method
    function EmitQuerySelectorAllOverloads(m: Browser.Method) {
        if (matchSingleParamMethodSignature(m, "querySelectorAll", "NodeList", "string")) {
            Pt.Printl("querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;");
            Pt.Printl("querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;");
            Pt.Printl("querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;");
        }
    }

    function EmitHTMLElementTagNameMap() {
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


    function EmitSVGElementTagNameMap() {
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

    function EmitElementTagNameMap() {
        Pt.Printl("/** @deprecated Directly use HTMLElementTagNameMap or SVGElementTagNameMap as appropriate, instead. */");
        Pt.Printl("interface ElementTagNameMap extends HTMLElementTagNameMap, SVGElementTagNameMap { }");
        Pt.Printl("");
    }

    /// Emit overloads for the createEvent method
    function EmitCreateEventOverloads(m: Browser.Method) {
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
    function ParamsToString(ps: Browser.Param[]) {
        function paramToString(p: Browser.Param) {
            let isOptional = !p.variadic && p.optional;
            let pType = isOptional ? DomTypeToTsType(p.type) : DomTypeToNullableTsType(p.type, !!p.nullable);
            return (p.variadic ? "..." : "") +
                AdjustParamName(p.name) +
                (isOptional ? "?: " : ": ") +
                pType +
                (p.variadic ? "[]" : "");
        }
        return ps.map(paramToString).join(", ");
    }

    function EmitCallBackInterface(flavor: Flavor, i: Browser.Interface) {
        if (ShouldKeep(flavor, i)) {
            if (i.name === "EventListener") {
                Pt.Printl(`interface ${i.name} {`);
                Pt.PrintWithAddedIndent("(evt: Event): void;");
                Pt.Printl("}");
            }
            else {
                let m = i.methods.method[0];
                let overload = GetOverloads(m, false)[0];
                let paramsString = ParamsToString(overload.paramCombinations);
                let returnType = DomTypeToTsType(m.type);
                Pt.Printl(`type ${i.name} = ((${paramsString}) => ${returnType}) | { ${m.name}(${paramsString}): ${returnType}; };`);
            }
            Pt.Printl("");
        }
    }

    function emitCallBackFunction(cb: Browser.CallbackFunction) {
        Pt.Printl(`interface ${cb.name} {`);
        if (cb["override-signatures"]) {
            cb["override-signatures"]!.forEach(s => Pt.PrintWithAddedIndent(`${s};`));
        }
        else {
            let overloads = GetOverloads(cb, false);
            for (const { paramCombinations: pCombList } of overloads) {
                let paramsString = ParamsToString(pCombList);
                Pt.PrintWithAddedIndent(`(${paramsString}): ${DomTypeToTsType(cb.type)};`);
            }
        }
        Pt.Printl("}");
    }

    function EmitCallBackFunctions(flavor: Flavor) {
        GetCallbackFuncsByFlavor(flavor).forEach(emitCallBackFunction);
    }

    function emitEnum(e: Browser.Enum) {
        Pt.Printl(`type ${e.name} = ${e.value.map(v => `"${v}"`).join(" | ")};`);
    }

    function EmitEnums(flavor: Flavor) {
        GetEnumsByFlavor(flavor).forEach(emitEnum);
    }

    function EmitEventHandlerThis(flavor: Flavor, prefix: string, i: Browser.Interface) {
        if (prefix === "") {
            return `this: ${i.name} , `;
        }
        else {
            const pollutor = GetGlobalPollutor(flavor);
            return pollutor ? `this: ${pollutor.name}, ` : "";
        }
    }

    // A covariant  EventHandler is one that is defined in a parent interface as then redefined in current interface with a more specific argument types
    // These patterns are unsafe, and flagged as error under --strictFunctionTypes.
    // Here we know the property is already defined on the interface, we elide its declaration if the parent has the same handler defined
    function isCovariantEventHandler(i: Browser.Interface, p: Browser.Property) {
        return p.type === "EventHandler" &&
            iNameToEhParents[i.name] && iNameToEhParents[i.name].length > 0 &&
            !!iNameToEhParents[i.name].find(
                i => iNameToEhList[i.name] && iNameToEhList[i.name].length > 0 &&
                    !!iNameToEhList[i.name].find(e => e.name === p.name));
    }


    function emitProperty(flavor: Flavor, prefix: string, i: Browser.Interface, emitScope: EmitScope, p: Browser.Property, conflictedMembers: Set<string>) {
        function printLine(content: string) {
            if (conflictedMembers.has(p.name))
                Pt.PrintlToStack(content);
            else
                Pt.Printl(content);
        }

        if (p.comment) {
            printLine(p.comment);
        }

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
                if (p.type === "EventHandler") {
                    // Sometimes event handlers with the same name may actually handle different
                    // events in different interfaces. For example, "onerror" handles "ErrorEvent"
                    // normally, but in "SVGSVGElement" it handles "SVGError" event instead.
                    let eType = p["event-handler"] ? getEventTypeInInterface(p["event-handler"]!, i) : "Event";
                    pType = `(${EmitEventHandlerThis(flavor, prefix, i)}ev: ${eType}) => any`;
                }
                else {
                    pType = DomTypeToTsType(p.type);
                }
            }
            let requiredModifier = !p.required || p.required === "1" ? "" : "?";
            pType = p.nullable ? makeNullable(pType) : pType;
            let readOnlyModifier = p["read-only"] && prefix === "" ? "readonly " : "";
            printLine(`${prefix}${readOnlyModifier}${p.name}${requiredModifier}: ${pType};`);
        }
    }

    function EmitProperties(flavor: Flavor, prefix: string, emitScope: EmitScope, i: Browser.Interface, conflictedMembers: Set<string>) {
        // Note: the schema file shows the property doesn't have "static" attribute,
        // therefore all properties are emited for the instance type.
        if (emitScope !== EmitScope.StaticOnly) {
            if (i.properties) {
                i.properties.property
                    .filter(p => ShouldKeep(flavor, p))
                    .filter(p => !isCovariantEventHandler(i, p))
                    .forEach(p => emitProperty(flavor, prefix, i, emitScope, p, conflictedMembers));
            }
        }
    }


    function emitMethod(_flavor: Flavor, prefix: string, _i: Browser.Interface, m: Browser.Method, conflictedMembers: Set<string>) {
        function printLine(content: string) {
            if (m.name && conflictedMembers.has(m.name))
                Pt.PrintlToStack(content);
            else
                Pt.Printl(content);
        }

        // print comment
        if (m.comment) {
            printLine(m.comment);
        }

        if (m["override-signatures"]) {
            m["override-signatures"]!.forEach(s => printLine(`${prefix}${s};`));
        }
        else {
            switch (m.name) {
                case "createElement": return EmitCreateElementOverloads(m);
                case "createEvent": return EmitCreateEventOverloads(m);
                case "getElementsByTagName": return EmitGetElementsByTagNameOverloads(m);
                case "querySelector": return EmitQuerySelectorOverloads(m);
                case "querySelectorAll": return EmitQuerySelectorAllOverloads(m);
            }
            if (m["additional-signatures"]) {
                m["additional-signatures"]!.forEach(s => printLine(`${prefix}${s};`));
            }
            let overloads = GetOverloads(m, false);
            for (const { paramCombinations, returnTypes, nullable } of overloads) {
                let paramsString = ParamsToString(paramCombinations);
                let returnType = returnTypes.map(DomTypeToTsType).join(" | ");
                let returnString = nullable ? makeNullable(returnType) : returnType;
                printLine(`${prefix}${m.name || ""}(${paramsString}): ${returnString};`);
            }
        }
    }

    function EmitMethods(flavor: Flavor, prefix: string, emitScope: EmitScope, i: Browser.Interface, conflictedMembers: Set<string>) {
        // If prefix is not empty, then this is the global declare function addEventListener, we want to override this
        // Otherwise, this is EventTarget.addEventListener, we want to keep that.
        function mFilter(m: Browser.Method) {
            return matchScope(emitScope, m) &&
                !(prefix !== "" && (m.name === "addEventListener" || m.name === "removeEventListener"));
        }

        if (i.methods) {
            i.methods.method.filter(mFilter).forEach(m => emitMethod(flavor, prefix, i, m, conflictedMembers));
        }

        // The window interface inherited some methods from "Object",
        // which need to explicitly exposed
        if (i.name === "Window" && prefix === "declare function ") {
            Pt.Printl("declare function toString(): string;");
        }
    }

    /// Emit the properties and methods of a given interface
    function EmitMembers(flavor: Flavor, prefix: string, emitScope: EmitScope, i: Browser.Interface) {
        let conflictedMembers = new Set(extendConflictsBaseTypes[i.name] ? extendConflictsBaseTypes[i.name].memberNames : []);
        EmitProperties(flavor, prefix, emitScope, i, conflictedMembers);
        let methodPrefix = prefix.startsWith("declare var") ? "declare function " : "";
        EmitMethods(flavor, methodPrefix, emitScope, i, conflictedMembers);
    }

    /// Emit all members of every interfaces at the root level.
    /// Called only once on the global polluter object
    function EmitAllMembers(flavor: Flavor, i: Browser.Interface) {
        let prefix = "declare var ";
        EmitMembers(flavor, prefix, EmitScope.All, i);

        for (const relatedIName of iNameToIDependList[i.name]) {
            const i = GetInterfaceByName(relatedIName);
            if (i) {
                EmitAllMembers(flavor, i);
            }
        }
    }

    function EmitEventHandlers(prefix: string, i: Browser.Interface) {
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
                    .sort((i1, i2) => i1.name > i2.name ? -1 : 1)
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

    function EmitConstructorSignature(_flavor: Flavor, i: Browser.Interface) {
        if (i.constructor && i.constructor.comment) {
            Pt.Printl(i.constructor.comment);
        }
        // Emit constructor signature
        if (i["override-constructor-signatures"]) {
            i["override-constructor-signatures"]!.forEach(s => Pt.Printl(`${s};`));
        }
        else if (i.constructor) {
            for (const { paramCombinations } of GetOverloads(i.constructor, false)) {
                let paramsString = ParamsToString(paramCombinations);
                Pt.Printl(`new(${paramsString}): ${i.name};`);
            }
        }
        else {
            Pt.Printl(`new(): ${i.name};`);
        }
    }

    function EmitConstructor(flavor: Flavor, i: Browser.Interface) {
        Pt.Printl(`declare var ${i.name}: {`);
        Pt.IncreaseIndent();

        Pt.Printl(`prototype: ${i.name};`);
        EmitConstructorSignature(flavor, i);
        EmitConstants(i);
        EmitMembers(flavor, "", EmitScope.StaticOnly, i);

        Pt.DecreaseIndent();
        Pt.Printl("};");
        Pt.Printl("");
    }

    function EmitNamedConstructor(i: Browser.Interface) {
        const nc = i["named-constructor"];
        if (nc) {
            Pt.Printl(`declare var ${nc.name}: { new(${ParamsToString(nc.param)}): ${i.name}; };`);
        }
    }
    /// Emit all the named constructors at root level
    function EmitNamedConstructors() {
        getElements(browser.interfaces, "interface").forEach(EmitNamedConstructor);
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

        let finalExtends = concat([i.extends || "Object"], i.implements)
            .filter(i => i !== "Object")
            .map(processIName)

        if (finalExtends && finalExtends.length) {
            Pt.Print(` extends ${finalExtends.join(", ")}`);
        }
        Pt.Print(" {");
    }

    /// To decide if a given method is an indexer and should be emited
    function ShouldEmitIndexerSignature(i: Browser.Interface, m: Browser.Method) {
        if (m.getter && m.param && m.param.length === 1) {
            // TypeScript array indexer can only be number or string
            // for string, it must return a more generic type then all
            // the other properties, following the Dictionary pattern
            switch (DomTypeToTsType(m.param[0].type)) {
                case "number": return true;
                case "string":
                    if (DomTypeToTsType(m.type) === "any") {
                        return true;
                    }
                    let mTypes = distinct(i.methods && i.methods.method.map(m => m.type).filter(t => t !== "void") || []);
                    let amTypes = distinct(i["anonymous-methods"] && i["anonymous-methods"]!.method.map(m => m.type).filter(t => t !== "void") || []); // |>  Array.distinct
                    let pTypes = distinct(i.properties && i.properties.property.map(m => m.type).filter(t => t !== "void") || []); // |>  Array.distinct

                    if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 0) return amTypes[0] === m.type;
                    if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 0) return mTypes[0] === amTypes[0] && amTypes[0] === m.type;
                    if (mTypes.length === 0 && amTypes.length === 1 && pTypes.length === 1) return amTypes[0] === pTypes[0] && amTypes[0] === m.type;
                    if (mTypes.length === 1 && amTypes.length === 1 && pTypes.length === 1) return mTypes[0] === amTypes[0] && amTypes[0] === pTypes[0] && amTypes[0] === m.type;
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
            concat(i.methods && i.methods.method, i["anonymous-methods"] && i["anonymous-methods"]!.method)
                .filter(m => ShouldEmitIndexerSignature(i, m) && matchScope(emitScope, m))
                .forEach(m => {
                    let indexer = m.param![0]
                    Pt.Printl(`[${indexer.name}: ${DomTypeToTsType(indexer.type)}]: ${DomTypeToTsType(m.type)};`);
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
            iNameToEhList[i.name].forEach(emitInterfaceEventMapEntry);
            Pt.DecreaseIndent();
            Pt.Printl("}");
            Pt.Printl("");
        }
    }


    function EmitInterface(flavor: Flavor, i: Browser.Interface) {
        Pt.ClearStack();
        EmitInterfaceEventMap(i);

        Pt.ResetIndent()
        EmitInterfaceDeclaration(i);
        Pt.IncreaseIndent();

        let prefix = "";
        EmitMembers(flavor, prefix, EmitScope.InstanceOnly, i);
        EmitConstants(i);
        EmitEventHandlers(prefix, i);
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


    function EmitStaticInterface(flavor: Flavor, i: Browser.Interface) {
        // Some types are static types with non-static members. For example,
        // NodeFilter is a static method itself, however it has an "acceptNode" method
        // that expects the user to implement.
        let hasNonStaticMethod = i.methods && !!i.methods.method.find(m => !m.static);
        let hasProperty = i.properties && i.properties.property.find(p => !p.static);
        let hasNonStaticMember = hasNonStaticMethod || hasProperty

        function emitAddedConstructor() {
            // match InputJson.getAddedItemsByInterfaceName ItemKind.Constructor flavor i.Name with
            // | [||] -> ()
            // | ctors ->
            // Pt.Printl("prototype: ${};" i.Name
            //     ctors |> Array.iter(fun ctor -> ctor.Signatures |> Array.iter(Pt.Printl("${};"))
        }

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
            EmitMembers(flavor, prefix, EmitScope.InstanceOnly, i);
            EmitEventHandlers(prefix, i);
            EmitIndexers(EmitScope.InstanceOnly, i);

            Pt.DecreaseIndent();
            Pt.Printl("}");
            Pt.Printl("");
            Pt.Printl(`declare var ${i.name}: {`);
            Pt.IncreaseIndent();
            EmitConstants(i);
            EmitMembers(flavor, prefix, EmitScope.StaticOnly, i);
            emitAddedConstructor();
            Pt.DecreaseIndent();
            Pt.Printl("};");
            Pt.Printl("");
        }

        function emitPureStaticInterface() {
            Pt.ResetIndent()
            EmitInterfaceDeclaration(i);
            Pt.IncreaseIndent();

            let prefix = "";
            EmitMembers(flavor, prefix, EmitScope.StaticOnly, i);
            EmitConstants(i);
            EmitEventHandlers(prefix, i);
            EmitIndexers(EmitScope.StaticOnly, i);
            emitAddedConstructor();
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


    function EmitNonCallbackInterfaces(flavor: Flavor) {
        for (const i of GetNonCallbackInterfacesByFlavor(flavor)) {
            // If the static attribute has a value, it means the type doesn't have a constructor
            if (i.static) {
                EmitStaticInterface(flavor, i);
            }
            else if (i["no-interface-object"]) {
                EmitInterface(flavor, i);
            }
            else {
                EmitInterface(flavor, i);
                EmitConstructor(flavor, i);
            }
        }
    }

    function emitDictionary(_flavor: Flavor, dict: Browser.Dictionary) {
        if (!dict.extends || dict.extends === "Object") {
            Pt.Printl(`interface ${processInterfaceType(dict, dict.name)} {`);
        }
        else {
            Pt.Printl(`interface ${processInterfaceType(dict, dict.name)} extends ${dict.extends} {`);
        }
        Pt.IncreaseIndent()
        if (dict.members) {
            dict.members.member
                .forEach(m => {
                    let tsType;
                    if (m["override-type"]) {
                        tsType = m["override-type"];
                    }
                    else {
                        tsType = DomTypeToTsType(m.type);
                        tsType = m.nullable ? makeNullable(tsType) : tsType;
                    }
                    let requiredModifier = m.required === "1" ? "" : "?";
                    Pt.Printl(`${m.name}${requiredModifier}: ${tsType};`);
                });
        }
        Pt.DecreaseIndent();
        Pt.Printl("}");
        Pt.Printl("");
    }

    function EmitDictionaries(flavor: Flavor) {
        getElements(browser.dictionaries, "dictionary")
            .filter(d => flavor !== Flavor.Worker || knownWorkerInterfaces.has(d.name))
            .forEach(d => emitDictionary(flavor, d));

        if (flavor === Flavor.Worker && worker.dictionaries) {
            getElements(worker.dictionaries, "dictionary")
                .forEach(d => emitDictionary(flavor, d));
        }
    }

    function emitTypeDef(typeDef: Browser.TypeDef) {
        Pt.Printl(`type ${typeDef["new-type"]} = ${typeDef["override-type"] || DomTypeToTsType(typeDef.type)};`);
    }

    function EmitTypeDefs(flavor: Flavor) {
        if (flavor === Flavor.Worker) {
            if (browser.typedefs)
                browser.typedefs.typedef
                    .filter(t => knownWorkerInterfaces.has(t["new-type"]))
                    .forEach(emitTypeDef);

            if (worker.typedefs)
                worker.typedefs.typedef
                    .forEach(emitTypeDef);

        }
        else if (browser.typedefs) {
            browser.typedefs.typedef
                .forEach(emitTypeDef);
        }
    }

    function EmitTheWholeThing(flavor: Flavor, target: string) {
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

        EmitDictionaries(flavor);
        getElements(browser["callback-interfaces"], "interface")
            .forEach(i => EmitCallBackInterface(flavor, i));
        EmitNonCallbackInterfaces(flavor);

        // // Add missed interface definition from the spec
        // InputJson.getAddedItems InputJson.Interface flavor |> Array.iter EmitAddedInterface

        Pt.Printl("declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;");
        Pt.Printl("");

        EmitCallBackFunctions(flavor);

        if (flavor !== Flavor.Worker) {
            EmitHTMLElementTagNameMap();
            EmitSVGElementTagNameMap();
            EmitElementTagNameMap();
            EmitNamedConstructors();
        }

        const gp = GetGlobalPollutor(flavor);
        if (gp) {
            EmitAllMembers(flavor, gp);
            EmitEventHandlers("declare var ", gp);
        }


        EmitTypeDefs(flavor);
        EmitEnums(flavor);

        fs.writeFileSync(target, Pt.GetResult());
    }

    function EmitIterator(i: Browser.Interface) {

        // check anonymous unsigned long getter and length property
        let isIterableGetter = (m: Browser.Method) =>
            m.getter === "1" && !!m.param && Array.isArray(m.param) && m.param.length === 1 && integerTypes.has(m.param[0].type);

        function findIterableGetter() {
            let anonymousGetter = i["anonymous-methods"] && i["anonymous-methods"]!.method.find(isIterableGetter);

            if (anonymousGetter) return anonymousGetter;
            else if (i.methods) return i.methods.method.find(isIterableGetter);
            else return undefined;
        }

        function findLengthProperty(p: Browser.Property) {
            return p.name === "length" && integerTypes.has(p.type);
        }

        if (i.name !== "Window" && i.properties) {
            let iterableGetter = findIterableGetter()
            let lengthProperty = i.properties.property.find(findLengthProperty);
            if (iterableGetter && lengthProperty) {
                Pt.Printl(`interface ${i.name} {`);
                Pt.IncreaseIndent();
                Pt.Printl(`[Symbol.iterator](): IterableIterator<${DomTypeToTsType(iterableGetter.type)}>`);
                Pt.DecreaseIndent()
                Pt.Printl("}");
                Pt.Printl("");
            }
        }
    }
    function EmitES6Thing(target: string) {
        Pt.Reset();
        Pt.Printl("/////////////////////////////");
        Pt.Printl("/// DOM ES6 APIs");
        Pt.Printl("/////////////////////////////");
        Pt.Printl("");

        getElements(browser.interfaces, "interface").forEach(EmitIterator);

        fs.writeFileSync(target, Pt.GetResult());
    }

    export function EmitDomWeb() {
        EmitTheWholeThing(Flavor.Web, tsWebOutput);
        EmitES6Thing(tsWebES6Output);
    }

    export function EmitDomWorker() {
        ignoreDOMTypes = true;
        EmitTheWholeThing(Flavor.Worker, tsWorkerOutput);
    }
}

Emit.EmitDomWeb();
Emit.EmitDomWorker();



