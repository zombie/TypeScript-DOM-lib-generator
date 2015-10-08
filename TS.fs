module TS

open System
open System.Text.RegularExpressions
open Shared
open System.IO

// Global print target
let Pt = StringPrinter()

// When dump webworker types the dom types are ignored
let mutable ignoreDOMTypes = false

// Extended types used but not defined in the spec
let extendedTypes = 
    ["ArrayBuffer";"ArrayBufferView";"Int8Array";"Uint8Array";"Int16Array";"Uint16Array";"Int32Array";"Uint32Array";"Float32Array";"Float64Array"]

/// Get typescript type using object dom type, object name, and it's associated interface name
let rec DomTypeToTsType (objDomType: string) = 
    match objDomType.Trim('?') with
    | "AbortMode" -> "String"
    | "any" -> "any"
    | "bool" -> "boolean"
    | "boolean" -> "boolean"
    | "Boolean" -> "boolean"
    | "CanvasPixelArray" -> "number[]"
    | "Date" -> "Date"
    | "DOMHighResTimeStamp" -> "number"
    | "DOMString" -> "string"
    | "DOMTimeStamp" -> "number"
    | "double" -> "number"
    | "EndOfStreamError" -> "number"
    | "EventListener" -> "EventListenerOrEventListenerObject"
    | "float" -> "number"
    | "Function" -> "Function"
    | "long long" -> "number"
    | "long" -> "number"
    | "object" -> "any"
    | "Promise" -> "Promise"
    | "ReadyState" -> "number"
    | "sequence" -> "Array"
    | "short" -> "number"
    | "signed long" -> "number"
    | "signed long long" -> "number"
    | "signed short" -> "number"
    | "UnrestrictedDouble" -> "number"
    | "unsigned long" -> "number"
    | "unsigned long long" -> "number"
    | "unsigned long" -> "number"
    | "unsigned short" -> "number"
    | "void" -> "void"
    | extendedType when List.contains extendedType extendedTypes -> extendedType
    | _ -> 
        if ignoreDOMTypes && Seq.contains objDomType ["Element"; "Window"; "Document"] then "any"
        else
            // Name of an interface / enum / dict. Just return itself
            if allInterfacesMap.ContainsKey objDomType ||
                allCallbackFuncs.ContainsKey objDomType ||
                allDictionariesMap.ContainsKey objDomType then
                objDomType
            elif allEnumsMap.ContainsKey objDomType then
                "string"
            // Deal with union type
            elif (objDomType.Contains(" or ")) then
                let allTypes = objDomType.Trim('(', ')').Split([|" or "|], StringSplitOptions.None)
                                |> Array.map DomTypeToTsType
                if Seq.contains "any" allTypes then "any" else String.concat " | " allTypes
            else 
                // Check if is array type, which looks like "sequence<DOMString>"
                let genericMatch = Regex.Match(objDomType, @"^(\w+)<(\w+)>$")
                if genericMatch.Success then
                    let tName = DomTypeToTsType (genericMatch.Groups.[1].Value)
                    match tName with
                    | "Promise" -> "any"
                    | _ ->
                        let paramName = DomTypeToTsType (genericMatch.Groups.[2].Value)
                        if tName = "Array" then paramName + "[]"
                        else tName + "<" + paramName + ">"
                elif objDomType.EndsWith("[]") then
                    let elementType = objDomType.Replace("[]", "").Trim() |> DomTypeToTsType
                    elementType + "[]"
                else
                    "any"

let DumpConstants (i:Browser.Interface) =
    let dumpConstant (c: Browser.Constant) =
        Pt.printl "%s: %s;" c.Name (DomTypeToTsType c.Type)
    match i.Constants with
    | Some cs -> cs.Constants |> Array.iter dumpConstant
    | None -> ()

/// Dump overloads for the createElement method
let DumpCreateElementOverloads (m:Browser.Method) =
    if  not (OptionCheckValue "createElement" m.Name) || 
        (DomTypeToTsType m.Type) <> "Element" || 
        m.Params.Length <> 1 ||
        (DomTypeToTsType m.Params.[0].Type) <> "string" then
        raise (Exception "createElement method signature does not match expected.")
    else
        for e in tagNameToEleName do
            if iNameToIDependList.ContainsKey e.Value && Seq.contains "HTMLElement" iNameToIDependList.[e.Value] then
                Pt.printl "createElement(tagName: \"%s\"): %s;" e.Key e.Value
        Pt.printl "createElement(tagName: string): HTMLElement;"

/// Dump overloads for the getElementsByTagName method
let DumpGetElementsByTagNameOverloads (m:Browser.Method) =
    if  not (OptionCheckValue "getElementsByTagName" m.Name) || 
        (DomTypeToTsType m.Type) <> "NodeList" || 
        m.Params.Length <> 1 ||
        (DomTypeToTsType m.Params.[0].Type) <> "string" then
        raise (Exception "getElementsByTagName method signature does not match expected.")
    else
        for e in tagNameToEleName do
            Pt.printl "getElementsByTagName(%s: \"%s\"): NodeListOf<%s>;" m.Params.[0].Name (e.Key.ToLower()) e.Value
        Pt.printl "getElementsByTagName(%s: string): NodeListOf<Element>;" m.Params.[0].Name

/// Dump overloads for the createEvent method
let DumpCreateEventOverloads (m: Browser.Method) =
    if  not (OptionCheckValue "createEvent" m.Name) || 
        (DomTypeToTsType m.Type) <> "Event" || 
        m.Params.Length <> 1 ||
        (DomTypeToTsType m.Params.[0].Type) <> "string" then
        raise (Exception "createEvent method signature does not match expected.")
    else
        // Dump plurals. For example, "Events", "MutationEvents"
        let hasPlurals = ["Event"; "MutationEvent"; "MouseEvent"; "SVGZoomEvent"; "UIEvent"]
        distinctETypeList 
        |> List.iter (
            fun x -> 
                if List.contains x hasPlurals then
                    Pt.printl "createEvent(eventInterface:\"%s\"): %s;" x x
                    Pt.printl "createEvent(eventInterface:\"%ss\"): %s;" x x
                else
                    Pt.printl "createEvent(eventInterface:\"%s\"): %s;" x x)
        Pt.printl "createEvent(eventInterface: string): Event;"

let ParamsToString (ps: Param list) =
    let paramToString (p: Param) =
        (if p.Variadic then "..." else "") + 
        (AdjustParamName p.Name) + 
        (if not p.Variadic && p.Optional then "?: " else ": ") +
        (DomTypeToTsType p.Type) +
        (if p.Variadic then "[]" else "")
    String.Join(", ", (List.map paramToString ps))

let DumpMethod flavor prefix (i:Browser.Interface) (m:Browser.Method)  = 
    // print comment
    if m.Name.IsSome then
        match GetCommentForMethod i.Name m.Name.Value with
        | Some comment -> Pt.printl "%s" comment
        | _ -> ()

    // find if there are overriding signatures in the external json file
    let removedType = 
        match m.Name with
        | Some mName -> findRemovedType mName i.Name MemberKind.Method
        | None -> None

    let overridenType = 
        match m.Name with
        | Some mName -> findOverridingType mName i.Name MemberKind.Method
        | None -> None

    match removedType with
    | Some r -> ()
    | None ->
        match overridenType with
        | Some t -> 
            match flavor with 
            | Windows | Web -> t.WebOnlySignatures |> Array.iter (Pt.printl "%s%s;" prefix)
            | _ -> ()
            t.Signatures |> Array.iter (Pt.printl "%s%s;" prefix)
        | None -> 
            match i.Name, m.Name with
            | _, Some "createElement" -> DumpCreateElementOverloads m
            | _, Some "createEvent" -> DumpCreateEventOverloads m
            | _, Some "getElementsByTagName" -> DumpGetElementsByTagNameOverloads m
            | _ ->
                let consoleMethodsNeedToReplaceStringWithAny = [|"dir"; "dirxml"; "error"; "info"; "log"; "warn"|]
                GetOverloads (Method m) false
                |> List.iter 
                    (fun { ParamCombinations = pCombList; ReturnTypes = rTypes } ->
                        let paramsString = 
                            // Some console methods should accept "any" instead of "string" for convenience, although 
                            // it is said to be string in the spec
                            if i.Name = "Console" && m.Name.IsSome && Array.contains m.Name.Value consoleMethodsNeedToReplaceStringWithAny then
                                (ParamsToString pCombList).Replace("string", "any")
                            else
                                ParamsToString pCombList
                        let returnString = rTypes |> List.map DomTypeToTsType |> String.concat " | "
                        Pt.printl "%s%s(%s): %s;" prefix (if m.Name.IsSome then m.Name.Value else "") paramsString returnString
                    )
           
let DumpCallBackInterface (i:Browser.Interface) = 
    Pt.printl "interface %s {" i.Name
    Pt.increaseIndent()
    Pt.printl "(evt: Event): void;"
    Pt.decreaseIndent()
    Pt.printl "}"
    Pt.printl ""

let DumpCallBackFunctions flavor =
    let DumpCallBackFunction (cb: Browser.CallbackFunction) =
        Pt.printl "interface %s {" cb.Name
        match cb.Name with 
        | "ErrorEventHandler" -> 
            Pt.printWithAddedIndent "(message: string, filename?: string, lineno?: number, colno?: number, error?:Error): void;"
        | _ ->
            for { ParamCombinations = pCombList } in GetOverloads (CallBackFun cb) false do
                let paramsString = ParamsToString pCombList            
                match cb.Type with
                | "void" -> 
                    Pt.printWithAddedIndent "(%s): void;" paramsString
                | _ -> 
                    Pt.printWithAddedIndent "(%s): %s;" paramsString (DomTypeToTsType cb.Type)
        Pt.printl "}"
    
    GetCallbackFuncsByFlavor flavor
    |> Array.filter (fun cb -> flavor <> Worker || knownWorkerInterfaces.Contains cb.Name)
    |> Array.iter DumpCallBackFunction

let DumpEnums () =
    let dumpEnum (e: Browser.Enum) =
        Pt.printl "declare var %s: string;" e.Name
    browser.Enums |> Array.iter dumpEnum

/// Dump the properties and methods of a given interface
let DumpMembers flavor prefix (dumpScope: DumpScope) (i:Browser.Interface) =
    // -------- Dump properties -------- 
    // Note: the schema file shows the property doesn't have static attribute
    let dumpProperty (p: Browser.Property) =
        match GetCommentForProperty i.Name p.Name with
        | Some comment -> Pt.printl "%s" comment
        | _ -> ()

        match findRemovedType p.Name i.Name MemberKind.Property with 
        | Some _ -> ()
        | None -> 
            match findOverridingType p.Name i.Name MemberKind.Property with
            | Some t -> Pt.printl "%s%s: %s;" prefix t.Name t.Type.Value
            | None -> 
                let pType  = match p.Type with
                    | "EventHandler" -> String.Format("(ev: {0}) => any", ehNameToEType.[p.Name])
                    | _ -> DomTypeToTsType p.Type
                Pt.printl "%s%s: %s;" prefix p.Name pType

    if dumpScope <> StaticOnly then
        match i.Properties with
        | Some ps ->
            ps.Properties
            |> Array.filter (ShouldKeep flavor)
            |> Array.iter dumpProperty
        | None -> ()

        addedTypes 
        |> Array.filter (fun t -> t.Kind = "property" && (t.Interface.IsNone || t.Interface.Value = i.Name))
        |> Array.iter (fun t -> Pt.printl "%s%s: %s;" prefix t.Name t.Type.Value)

    // --------  Dump methods -------- 
    // Note: two cases:
    // 1. dump the members inside a interface -> no need to add prefix
    // 2. dump the members outside to expose them (for "Window") -> need to add "declare"
    let methodPrefix = 
        match prefix with
        | pf when pf.StartsWith("declare var") -> "declare function "
        | _ -> ""

    // Because eventhandler overload are not inherited between interfaces, 
    // they need to be taken care of seperately
    let hasEventHandlers = 
        iNameToEhList.ContainsKey i.Name && 
        not iNameToEhList.[i.Name].IsEmpty

    let mFilter (m:Browser.Method) =
        (match dumpScope with
        | StaticOnly -> m.Static.IsSome
        | InstanceOnly -> m.Static.IsNone
        | All -> true)
        &&
        not (hasEventHandlers && OptionCheckValue "addEventListener" m.Name)

    match i.Methods with
    | Some ms ->
        ms.Methods
        |> Array.filter mFilter 
        |> Array.iter (DumpMethod flavor methodPrefix i)
    | _ -> ()

    // The window interface inherited some methods from "Object",
    // which need to explicitly exposed
    if i.Name = "Window" && methodPrefix = "declare function " then
        Pt.printl "%stoString(): string;" methodPrefix

    // Issue4401:
    // Add "getElementsByClassName" to Element
    if i.Name = "Element" && dumpScope <> DumpScope.StaticOnly then
        Pt.printl "%sgetElementsByClassName(classNames: string): NodeListOf<Element>;" methodPrefix

/// Dump all members of every interfaces at the root level.
/// Called only once on the global polluter object
let rec DumpAllMembers flavor (i:Browser.Interface) =
    let prefix = "declare var "
    DumpMembers flavor prefix DumpScope.All i

    iNameToIDependList.[i.Name] 
    |> List.iter
        (fun relatedIName -> 
            match GetInterfaceByName relatedIName with
            | Some i' -> DumpAllMembers flavor i'
            | _ -> ())

let DumpEventHandlers (prefix: string) (i:Browser.Interface) =
    let DumpEventHandler prefix (eHandler: EventHandler)  =
        let actualEventType = 
            match i.Name, eHandler.EventName with 
            | "IDBDatabase", "abort"
            | "IDBTransaction", "abort"
            | "XMLHttpRequest", "abort"
            | "MSBaseReader", "abort"
            | "XMLHttpRequestEventTarget", "abort"
                -> "Event"
            | _ -> eHandler.EventType

        Pt.printl 
            "%saddEventListener(type: \"%s\", listener: (ev: %s) => any, useCapture?: boolean): void;" 
            prefix eHandler.EventName actualEventType

    let fPrefix = if prefix.StartsWith "declare var" then "declare function " else ""

    // Inheritance of "addEventListener" has two cases:
    // 1. No own eventhandlers -> it inherits all the eventhandlers from base interfaces
    // 2. Has own eventhandlers -> TypeScript's inherit mechanism erases all inherited eventhandler overloads 
    // so they need to be reprinted.
    if iNameToEhList.ContainsKey i.Name then
        iNameToEhList.[i.Name] |> List.sortBy (fun eh -> eh.EventName) |> List.iter (DumpEventHandler fPrefix)
        let shouldPrintAddEventListener =
            if iNameToEhList.[i.Name].Length > 0 then true
            else 
                match i.Extends, i.Implements.Length with
                | _, 0 -> false
                | "Object", 1 -> false
                | _, _ -> 
                    let allParents = Array.append [|i.Extends|] i.Implements
                    match allParents |> Array.filter (fun iName -> iNameToEhList.ContainsKey iName) |> Array.length with
                    // only one of the implemented interface has EventHandlers
                    | 0 | 1 -> false
                    // multiple implemented interfaces have EventHandlers
                    | _ -> true
        if shouldPrintAddEventListener then
           Pt.printl "%saddEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;" fPrefix
 
let DumpConstructorSignature (i:Browser.Interface) =
    //Dump constructor signature
    match i.Name, i.Constructor with
    // HOTFIX: The spec is not looking correct regarding the 'Blob' constructor. Filed a bug
    // and waiting for the IE team to respond
    | "Blob", _ -> 
        Pt.printl "new (blobParts?: any[], options?: BlobPropertyBag): Blob;"
    | "FormData", _ -> 
        Pt.printl "new (form?: HTMLFormElement): FormData;"
    | "MessageEvent", _ ->
        Pt.printl "new(type: string, eventInitDict?: MessageEventInit): MessageEvent;"
    | "ProgressEvent", _ ->
        Pt.printl "new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;"
    | "File", _ ->
        Pt.printl "new (parts: (ArrayBuffer | ArrayBufferView | Blob | string)[], filename: string, properties?: FilePropertyBag): File;"
    | _, Some ctor ->
        for { ParamCombinations = pCombList } in GetOverloads (Ctor ctor) false do
            let paramsString = ParamsToString pCombList
            Pt.printl "new(%s): %s;" paramsString i.Name
    | _ -> Pt.printl "new(): %s;" i.Name

let DumpConstructor flavor (i:Browser.Interface) =
    match i.Name with
    | "ImageData" ->
        Pt.printl "interface ImageDataConstructor {"
        Pt.printWithAddedIndent "prototype: ImageData;"
        Pt.printWithAddedIndent "new(width: number, height: number): ImageData;"
        Pt.printWithAddedIndent "new(array: Uint8ClampedArray, width: number, height: number): ImageData;"
        Pt.printl "}"
        Pt.printl ""
        Pt.printl "declare var ImageData: ImageDataConstructor; "
        Pt.printl ""
    | _ ->
        Pt.printl "declare var %s: {" i.Name
        Pt.increaseIndent()

        Pt.printl "prototype: %s;" i.Name
        DumpConstructorSignature i
        DumpConstants i
        let prefix = ""
        DumpMembers flavor prefix DumpScope.StaticOnly i

        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl ""

/// Dump all the named constructors at root level
let DumpNamedConstructors () =
    browser.Interfaces
    |> Array.filter (fun i -> i.NamedConstructor.IsSome)
    |> Array.iter 
        (fun i -> 
            let nc = i.NamedConstructor.Value
            let ncParams = 
                [for p in nc.Params do 
                    yield {Type = p.Type; Name = p.Name; Optional = p.Optional.IsSome; Variadic = p.Variadic.IsSome}]
            Pt.printl "declare var %s: {new(%s): %s; };" nc.Name (ParamsToString ncParams) i.Name)

let DumpInterfaceDeclaration (i:Browser.Interface) =
    Pt.printl "interface %s" i.Name
    match i.Extends::(List.ofArray i.Implements) with
    | [""] | [] | ["Object"] -> ()
    | allExtends -> Pt.print " extends %s" (String.Join(", ", allExtends))
    Pt.print " {"

let ShouldDumpIndexerSignature (i: Browser.Interface) (m: Browser.Method) =
    if m.Getter.IsSome && m.Params.Length = 1 then
        // TypeScript array indexer can only be number or string
        // for string, it must return a more generic type then all 
        // the other properties, following the Dictionary pattern
        match DomTypeToTsType m.Params.[0].Type with
        | "number" -> true
        | "string" ->
            match DomTypeToTsType m.Type with
            | "any" -> true
            | _ -> 
                let mTypes =
                    match i.Methods with
                    | Some ms ->
                        ms.Methods |> Array.map (fun m' -> m'.Type) |> Array.filter (fun t -> t <> "void") |> Array.distinct
                    | _ -> [||]
                let amTypes =
                    match i.AnonymousMethods with
                    | Some ms ->
                        ms.Methods |> Array.map (fun m' -> m'.Type) |> Array.filter (fun t -> t <> "void") |> Array.distinct
                    | _ -> [||]
                let pTypes =
                    match i.Properties with
                    | Some ps ->
                        ps.Properties |> Array.map (fun m' -> m'.Type) |> Array.filter (fun t -> t <> "void") |> Array.distinct
                    | _ -> [||]

                match mTypes, amTypes, pTypes with
                | [||], [|y|], [||] -> y = m.Type
                | [|x|], [|y|], [||] -> x = y && y = m.Type
                | [||], [|y|], [|z|] -> y = z && y = m.Type
                | [|x|], [|y|], [|z|] -> x = y && y = z && y = m.Type
                | _ -> false

        | _ -> false
    else 
        false

let DumpInterface flavor (i:Browser.Interface) =
    Pt.resetIndent()
    DumpInterfaceDeclaration i
    Pt.increaseIndent ()

    let prefix = ""
    DumpMembers flavor prefix DumpScope.InstanceOnly i
    DumpConstants i
    DumpEventHandlers prefix i

    let dumpIndexers (ms:Browser.Method []) =
        ms
        |> Array.filter (ShouldDumpIndexerSignature i)
        |> Array.iter 
            (fun m -> 
                let indexer = m.Params.[0]
                Pt.printl "[%s: %s]: %s;" 
                    indexer.Name 
                    (DomTypeToTsType indexer.Type) 
                    (DomTypeToTsType m.Type))        

    // The indices could be within either Methods or Anonymous Methods
    match i.Methods with
    | Some ms -> 
        ms.Methods |> dumpIndexers
        if i.Name = "HTMLCollection" then
            Pt.printl "[index: number]: Element;"
    | None -> ()

    match i.AnonymousMethods with
    | Some ms -> ms.Methods |> dumpIndexers
    | None -> ()

    Pt.decreaseIndent()
    Pt.printl "}"
    Pt.printl ""

let DumpStaticInterface flavor (i:Browser.Interface) =
    // Some types are static types with non-static members. For example, 
    // NodeFilter is a static method itself, however it has an "acceptNode" method
    // that expects the user to implement. 
    let hasNonStaticMember = 
        match i.Methods with
        | Some ms -> ms.Methods |> Array.exists (fun m -> m.Static.IsNone)
        | _ -> false

    let dumpStaticInterfaceWithNSMembers () = 
        Pt.resetIndent()
        DumpInterfaceDeclaration i
        Pt.increaseIndent ()

        let prefix = ""
        DumpMembers flavor prefix DumpScope.InstanceOnly i
        DumpEventHandlers prefix i

        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl ""
        Pt.printl "declare var %s: {" i.Name
        Pt.increaseIndent()
        Pt.printl "prototype: %s;" i.Name
        DumpConstants i
        DumpMembers flavor prefix DumpScope.StaticOnly i
        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl ""

    let dumpPureStaticInterface () =
        Pt.resetIndent()
        DumpInterfaceDeclaration i
        Pt.increaseIndent ()

        let prefix = ""
        DumpMembers flavor prefix DumpScope.StaticOnly i
        DumpConstants i
        DumpEventHandlers prefix i

        let dumpIndexers (ms:Browser.Method []) =
            ms
            |> Array.filter (fun m -> m.Getter.IsSome) 
            |> Array.iter 
                (fun m -> 
                    let indexer = m.Params.[0]
                    Pt.printl "[%s: %s]: %s;" 
                        indexer.Name 
                        (DomTypeToTsType indexer.Type) 
                        (DomTypeToTsType indexer.Type))

        // The indices could be within either Methods or Anonymous Methods
        match i.Methods with
        | Some ms -> ms.Methods |> dumpIndexers
        | None -> ()

        match i.AnonymousMethods with
        | Some ms -> ms.Methods |> dumpIndexers
        | None -> ()

        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl "declare var %s: %s;" i.Name i.Name
        Pt.printl ""

    if hasNonStaticMember then dumpStaticInterfaceWithNSMembers() else dumpPureStaticInterface()

let DumpNonCallbackInterfaces flavor =
    GetNonCallbackInterfacesByFlavor flavor
    |> Array.iter 
        (fun i -> 
            match i with
            // Static attribute the type doesn't have a constructor function
            | i when i.Static.IsSome -> 
                DumpStaticInterface flavor i
            | i when i.NoInterfaceObject.IsSome -> 
                DumpInterface flavor i
            | _ -> 
                DumpInterface flavor i
                DumpConstructor flavor i)

let DumpDictionaries flavor =
    let DumpDictionary (dict:Browser.Dictionary) =
        match dict.Extends with
        | "Object" -> Pt.printl "interface %s {" dict.Name
        | _ -> Pt.printl "interface %s extends %s {" dict.Name dict.Extends

        Pt.increaseIndent()
    
        dict.Members
        |> Array.iter (fun m -> Pt.printl "%s?: %s;" m.Name (DomTypeToTsType m.Type))

        Pt.decreaseIndent()
        Pt.printl "}"
        Pt.printl ""
    browser.Dictionaries 
    |> Array.filter (fun dict -> flavor <> Worker || knownWorkerInterfaces.Contains dict.Name)
    |> Array.iter DumpDictionary

let DumpAddedInterface (t: TypesFromJsonFile.Root) =
    match t.Extends with 
    | Some e -> Pt.printl "interface %s extends %s {" t.Name t.Extends.Value
    | None -> Pt.printl "interface %s {" t.Name
    
    t.Properties |> Array.iter (fun p -> Pt.printWithAddedIndent "%s: %s;" p.Name p.Type)
    t.Methods |> Array.collect (fun m -> m.Signatures) |> Array.iter (Pt.printWithAddedIndent "%s;")
    t.Indexer |> Array.collect (fun i -> i.Signatures) |> Array.iter (Pt.printWithAddedIndent "%s;")
    Pt.printl "}"
    Pt.printl ""

let DumpTheWholeThing flavor (target:TextWriter) =
    Pt.reset()
    Pt.printl "/////////////////////////////"
    match flavor with
    | Worker -> Pt.printl "/// IE Worker APIs"
    | _ -> Pt.printl "/// IE DOM APIs"
    Pt.printl "/////////////////////////////"
    Pt.printl ""

    DumpDictionaries flavor
    DumpCallBackInterface browser.CallbackInterfaces.Interface
    DumpNonCallbackInterfaces flavor    
    
    // Add missed interface definition from the spec
    getAllAddedInterfaces flavor |> Array.iter DumpAddedInterface

    Pt.printl "declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;"
    Pt.printl ""

    DumpCallBackFunctions flavor

    if flavor <> Worker then
        DumpNamedConstructors()

    match GetGlobalPollutor flavor with
    | Some gp -> 
        DumpAllMembers flavor gp
        DumpEventHandlers "declare var " gp
    | _ -> ()
    
    fprintf target "%s" (Pt.getResult())
    target.Flush()

let DumpDomWeb () =
    DumpTheWholeThing Windows GlobalVars.tsWebOutput

let DumpDomWorker () =
    ignoreDOMTypes <- true
    DumpTheWholeThing Worker GlobalVars.tsWorkerOutput