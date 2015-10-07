module Shared

open FSharp.Data
open System.IO
open System
open System.Text
open System.Collections.Generic
open Microsoft.FSharp.Reflection

/// ===========================================
/// Global variables
/// ===========================================
module GlobalVars = 
    if not (Directory.Exists(__SOURCE_DIRECTORY__ + @"\generated")) then 
        Directory.CreateDirectory(__SOURCE_DIRECTORY__ + @"\generated") |> ignore
    
    let inputFolder = __SOURCE_DIRECTORY__ + @"\inputfiles"
    let makeTextWriter fileName = File.CreateText(__SOURCE_DIRECTORY__ + @"\generated\" + fileName) :> TextWriter
    let jsWebOutput = makeTextWriter "domWeb.js"
    let jsWinOutput = makeTextWriter "domWindows.js"
    let jsWorkerOutput = makeTextWriter "dedicatedworker.js"
    let tsWebOutput = makeTextWriter "dom.generated.d.ts"
    let tsWorkerOutput = makeTextWriter "webworker.generated.d.ts"
    let defaultEventType = "Event"

/// ===========================================
/// Types
/// ===========================================
type Browser = XmlProvider< "sample.xml", Global=true >

type CommentType = JsonProvider< "inputfiles\comments.json" >

type TypesFromJsonFile = JsonProvider< "inputfiles\overridingTypes.json" >

let overridingTypes = 
    File.ReadAllText(__SOURCE_DIRECTORY__ + @"\inputfiles\overridingTypes.json") |> TypesFromJsonFile.Parse

let removedTypes = 
    File.ReadAllText(__SOURCE_DIRECTORY__ + @"\inputfiles\removedTypes.json") |> TypesFromJsonFile.Parse

let addedTypes = 
    File.ReadAllText(__SOURCE_DIRECTORY__ + @"\inputfiles\addedTypes.json") |> TypesFromJsonFile.Parse

type MemberKind = 
    Property | Method
    member this.ToString = if this = Property then "property" else "method"

let findTypeFromJsonArray (jsonArray: TypesFromJsonFile.Root []) mName iName (kind: MemberKind) =
    jsonArray
    |> Array.tryFind (fun t -> 
        t.Name = mName && (t.Interface.IsNone || t.Interface.Value = iName) && t.Kind = kind.ToString)

let findOverridingType mName iName (kind: MemberKind) = findTypeFromJsonArray overridingTypes mName iName kind
let findRemovedType mName iName (kind: MemberKind) = findTypeFromJsonArray removedTypes mName iName kind
let findAddedType mName iName (kind: MemberKind) = findTypeFromJsonArray addedTypes mName iName kind

let comments = File.ReadAllText(__SOURCE_DIRECTORY__ + @"\inputfiles\comments.json") |> CommentType.Parse

let GetCommentForProperty iName pName = 
    match comments.Interfaces |> Array.tryFind (fun i -> i.Name = iName) with
    | Some i -> 
        match i.Members.Property |> Array.tryFind (fun p -> p.Name = pName) with
        | Some p -> Some p.Comment
        | _ -> None
    | _ -> None

let GetCommentForMethod iName mName = 
    match comments.Interfaces |> Array.tryFind (fun i -> i.Name = iName) with
    | Some i -> 
        match i.Members.Method |> Array.tryFind (fun m -> m.Name = mName) with
        | Some m -> Some m.Comment
        | _ -> None
    | _ -> None

// Printer for print to file
type Printer(target : TextWriter) = 
    let output = StringBuilder()
    let mutable curTabCount = 0
    member this.getCurIndent() = String.replicate curTabCount "    "
    member this.target = target
    member this.print content = Printf.kprintf (fun s -> output.Append s |> ignore) content
    member this.printl content = 
        Printf.kprintf (fun s -> output.Append("\r\n" + this.getCurIndent() + s) |> ignore) content
    member this.increaseIndent() = curTabCount <- curTabCount + 1
    member this.decreaseIndent() = curTabCount <- Math.Max(curTabCount - 1, 0)
    
    member this.startBrace() = 
        this.printl "{"
        this.increaseIndent()
    
    member this.endBrace() = 
        this.decreaseIndent()
        this.printl "}"
    
    member this.resetIndent() = curTabCount <- 0
    member this.printWithAddedIndent content = 
        Printf.kprintf (fun s -> output.Append("\r\n" + this.getCurIndent() + "    " + s) |> ignore) content
    
    member this.dump() = 
        fprintf this.target "%s" (output.ToString())
        this.target.Flush()
    
    member this.close() = this.target.Close()

// Printer for print to string
type StringPrinter() = 
    let output = StringBuilder()
    let mutable curTabCount = 0
    member this.getCurIndent() = String.replicate curTabCount "    "
    member this.print content = Printf.kprintf (fun s -> output.Append s |> ignore) content
    member this.printl content = 
        Printf.kprintf (fun s -> output.Append("\r\n" + this.getCurIndent() + s) |> ignore) content
    member this.increaseIndent() = curTabCount <- curTabCount + 1
    member this.setIndent indentNum = curTabCount <- indentNum
    member this.decreaseIndent() = curTabCount <- Math.Max(curTabCount - 1, 0)
    member this.resetIndent() = curTabCount <- 0
    member this.printWithAddedIndent content = 
        Printf.kprintf (fun s -> output.Append("\r\n" + this.getCurIndent() + "    " + s) |> ignore) content
    member this.getResult() = output.ToString()
    member this.clear() = output.Clear() |> ignore
    member this.reset() = 
        this.clear()
        this.resetIndent()

type Event = 
    { Name : string
      Type : string }

type Flavor = 
    | Worker
    | Web
    | Windows
    override x.ToString() = 
        match FSharpValue.GetUnionFields(x, typeof<Flavor>) with
        | case, _ -> case.Name

/// Method parameter
type Param = 
    { Type : string
      Name : string
      Optional : bool
      Variadic : bool }

/// Function overload
type Overload = 
    { ParamCombinations : Param list
      ReturnTypes : string list }
    member this.IsEmpty = this.ParamCombinations.IsEmpty && (this.ReturnTypes = [ "void" ] || this.ReturnTypes = [ "" ])

type Function = 
    | Method of Browser.Method
    | Ctor of Browser.Constructor
    | CallBackFun of Browser.CallbackFunction

// Note:
// Eventhandler's name and the eventName are not just off by "on".
// For example, handlers named "onabort" may handle "SVGAbort" event in the XML file
type EventHandler = 
    { Name : string
      EventName : string
      EventType : string }

/// Decide which members of a function to dump
type DumpScope = 
    | StaticOnly
    | InstanceOnly
    | All

/// ===========================================
/// Shared data and helper functions
/// ===========================================
/// Add the 'Seq.contains' method to the Seq module
module Seq = 
    let contains e s = Seq.exists ((=) e) s

type String with
    member this.TrimStartString str = 
        if this.StartsWith(str) then this.Substring(str.Length)
        else this

/// Parameter cannot be named "default" in JavaScript/Typescript so we need to rename it.
let AdjustParamName name = 
    match name with
    | "default" -> "_default"
    | "delete" -> "_delete"
    | "continue" -> "_continue"
    | _ -> name

/// Quick checker for option type values
let OptionCheckValue value = 
    function 
    | Some v when v = value -> true
    | _ -> false

/// Parse the xml input file
let browser = 
    (new StreamReader(Path.Combine(GlobalVars.inputFolder, "browser.webidl.xml"))).ReadToEnd() |> Browser.Parse

let worker = 
    (new StreamReader(Path.Combine(GlobalVars.inputFolder, "webworkers.specidl.xml"))).ReadToEnd() |> Browser.Parse

/// Check if the given element should be disabled or not
/// (Member constraint aka duck typing)
/// reason is that ^a can be an interface, property or method, but they
/// all share a 'tag' property
let inline ShouldKeep flavor (i : ^a when ^a : (member Tags : string option) and ^a : (member Name : string)) = 
    let filterByTag = 
        match ((((((^a : (member Tags : string option) i)))))) with
        | Some tags -> 
            // Check if should be included
            match flavor with
            | Web -> 
                [ "MSAppOnly"; "WinPhoneOnly" ]
                |> Seq.exists (fun t -> tags.Contains t)
                |> not
            | Windows -> true
            | Worker -> 
                [ "IEOnly" ]
                |> Seq.exists (fun t -> tags.Contains t)
                |> not
        | _ -> true
    filterByTag

// Global interfacename to interface object map
let allWebNonCallbackInterfaces = Array.concat [| browser.Interfaces; browser.MixinInterfaces.Interfaces |]

let allWebInterfaces = 
    Array.concat [| browser.Interfaces
                    [| browser.CallbackInterfaces.Interface |]
                    browser.MixinInterfaces.Interfaces |]

let allWorkerAdditionalInterfaces = Array.concat [| worker.Interfaces; worker.MixinInterfaces.Interfaces |]
let allInterfaces = Array.concat [| allWebInterfaces; allWorkerAdditionalInterfaces |]

let allInterfacesMap = 
    [ for i in allInterfaces do
          yield (i.Name, i) ]
    |> Map.ofList

let allDictionariesMap = 
    Array.concat [| browser.Dictionaries; worker.Dictionaries |]
    |> Array.map (fun d -> (d.Name, d))
    |> Map.ofArray

let allEnumsMap = 
    Array.concat [| browser.Enums; worker.Enums |]
    |> Array.map (fun e -> (e.Name, e))
    |> Map.ofArray

let allCallbackFuncs = 
    Array.concat [| browser.CallbackFunctions; worker.CallbackFunctions |]
    |> Array.map (fun c -> (c.Name, c))
    |> Map.ofArray

let GetInterfaceByName = allInterfacesMap.TryFind
let knownWorkerInterfaces = 
    [ "AbstractWorker"; "AudioBuffer"; "Blob"; "CloseEvent"; "Console"; "Coordinates"; "DecodeSuccessCallback"; 
      "DecodeErrorCallback"; "DOMError"; "DOMException"; "DOMStringList"; "ErrorEvent"; "Event"; "ErrorEventHandler"; 
      "EventException"; "EventInit"; "EventListener"; "EventTarget"; "File"; "FileList"; "FileReader"; 
      "FunctionStringCallback"; "IDBCursor"; "IDBCursorWithValue"; "IDBDatabase"; "IDBFactory"; "IDBIndex"; 
      "IDBKeyRange"; "IDBObjectStore"; "IDBOpenDBRequest"; "IDBRequest"; "IDBTransaction"; "IDBVersionChangeEvent"; 
      "ImageData"; "MediaQueryList"; "MediaQueryListListener"; "MessageChannel"; "MessageEvent"; "MessagePort"; "MSApp"; 
      "MSAppAsyncOperation"; "MSAppView"; "MSBaseReader"; "MSBlobBuilder"; "MSExecAtPriorityFunctionCallback"; 
      "MSLaunchUriCallback"; "MSStream"; "MSStreamReader"; "MSUnsafeFunctionCallback"; "NavigatorID"; "NavigatorOnLine"; 
      "Position"; "PositionCallback"; "PositionError"; "PositionErrorCallback"; "ProgressEvent"; "WebSocket"; 
      "WindowBase64"; "WindowConsole"; "Worker"; "XMLHttpRequest"; "XMLHttpRequestEventTarget"; "XMLHttpRequestUpload" ] 
    |> set

let GetAllInterfacesByFlavor flavor = 
    match flavor with
    | Web -> allWebInterfaces |> Array.filter (ShouldKeep Web)
    | Windows -> allWebInterfaces |> Array.filter (ShouldKeep Windows)
    | Worker -> 
        let isFromBrowserXml = allWebInterfaces |> Array.filter (fun i -> knownWorkerInterfaces.Contains i.Name)
        Array.append isFromBrowserXml allWorkerAdditionalInterfaces

let GetNonCallbackInterfacesByFlavor flavor = 
    match flavor with
    | Web -> allWebNonCallbackInterfaces |> Array.filter (ShouldKeep Web)
    | Windows -> allWebNonCallbackInterfaces |> Array.filter (ShouldKeep Windows)
    | Worker -> 
        let isFromBrowserXml = 
            allWebNonCallbackInterfaces |> Array.filter (fun i -> knownWorkerInterfaces.Contains i.Name)
        Array.append isFromBrowserXml allWorkerAdditionalInterfaces

let GetPublicInterfacesByFlavor flavor = 
    match flavor with
    | Web | Windows -> browser.Interfaces |> Array.filter (ShouldKeep flavor)
    | Worker -> 
        let isFromBrowserXml = browser.Interfaces |> Array.filter (fun i -> knownWorkerInterfaces.Contains i.Name)
        Array.append isFromBrowserXml worker.Interfaces

let GetCallbackFuncsByFlavor flavor = browser.CallbackFunctions |> Array.filter (ShouldKeep flavor)

/// Event name to event type map
let eNameToEType = 
    [ for i in allWebNonCallbackInterfaces do
          if i.Events.IsSome then yield! i.Events.Value.Events ]
    |> List.map (fun (e : Browser.Event) -> 
           let eType = 
               match e.Name with
               | "abort" -> "UIEvent"
               | "complete" -> "Event"
               | "error" -> "ErrorEvent"
               | "load" -> "Event"
               | "loadstart" -> "Event"
               | "progress" -> "ProgressEvent"
               | "readystatechange" -> "ProgressEvent"
               | "resize" -> "UIEvent"
               | "timeout" -> "ProgressEvent"
               | _ -> e.Type
           (e.Name, eType))
    |> Map.ofList

let eNameToETypeWithoutCase = 
    eNameToEType
    |> Map.toList
    |> List.map (fun (k, v) -> (k.ToLower(), v))
    |> Map.ofList

/// Tag name to element name map
let tagNameToEleName = 
    let preferedElementMap = 
        function 
        | "script" -> "HTMLScriptElement"
        | "a" -> "HTMLAnchorElement"
        | "title" -> "HTMLTitleElement"
        | "style" -> "HTMLStyleElement"
        | _ -> ""
    
    let resolveElementConflict tagName (iNames : seq<string>) = 
        match preferedElementMap tagName with
        | name when Seq.contains name iNames -> name
        | _ -> raise (Exception("Element conflict occured! Typename: " + tagName))
    
    [ for i in GetNonCallbackInterfacesByFlavor Windows do
          yield! [ for e in i.Elements do
                       yield (e.Name, i.Name) ] ]
    |> Seq.groupBy fst
    |> Seq.map (fun (key, group) -> (key, Seq.map snd group))
    |> Seq.map (fun (key, group) -> 
           key, 
           match Seq.length group with
           | 1 -> Seq.head group
           | _ -> resolveElementConflict key group)
    |> Map.ofSeq

/// Interface name to all its implemented / inherited interfaces name list map
/// e.g. If i1 depends on i2, i2 should be in dependencyMap.[i1.Name]
let iNameToIDependList = 
    let rec GetExtendList(iName : string) = 
        match GetInterfaceByName iName with
        | Some i -> 
            match i.Extends with
            | "Object" -> []
            | super -> super :: (GetExtendList super)
        | _ -> []
    
    let GetImplementList(iName : string) = 
        match GetInterfaceByName iName with
        | Some i -> List.ofArray i.Implements
        | _ -> []
    
    Array.concat [| allWebNonCallbackInterfaces; worker.Interfaces; worker.MixinInterfaces.Interfaces |]
    |> Array.map (fun i -> 
           (i.Name, 
            List.concat [ (GetExtendList i.Name)
                          (GetImplementList i.Name) ]))
    |> Map.ofArray

/// Distinct event type list, used in the "createEvent" function
let distinctETypeList = 
    let usedEvents = 
        [ for i in GetNonCallbackInterfacesByFlavor Windows do
              match i.Events with
              | Some es -> yield! es.Events
              | _ -> () ]
        |> List.map (fun e -> e.Type)
        |> List.distinct
    
    let unUsedEvents = 
        GetNonCallbackInterfacesByFlavor Windows
        |> Array.filter (fun i -> i.Extends = "Event")
        |> Array.map (fun i -> i.Name)
        |> Array.filter (fun n -> n.EndsWith("Event") && not (List.contains n usedEvents))
        |> Array.distinct
        |> List.ofArray
    
    List.concat [ usedEvents; unUsedEvents ] |> List.sort

/// Determine if interface1 depends on interface2
let IsDependsOn i1Name i2Name = 
    match (iNameToIDependList.ContainsKey i2Name) && (iNameToIDependList.ContainsKey i1Name) with
    | true -> Seq.contains i2Name iNameToIDependList.[i1Name]
    | false -> i2Name = "Object"

/// Interface name to its related eventhandler name list map
/// Note: 
/// In the xml file, each event handler has 
/// 1. eventhanlder name: "onready", "onabort" etc.
/// 2. the event name that it handles: "ready", "SVGAbort" etc.
/// And they don't NOT just differ by an "on" prefix!
let iNameToEhList = 
    let GetEventTypeFromHandler (p : Browser.Property) (i : Browser.Interface) = 
        let eType = 
            // Check the "event-handler" attribute of the event handler property, 
            // which is the corresponding event name
            match p.EventHandler with
            | Some eName -> 
                // The list is partly obtained from the table at 
                // http://www.w3.org/TR/DOM-Level-3-Events/#dom-events-conformance   #4.1
                match eNameToEType.TryFind eName with
                | Some v -> v
                | _ -> GlobalVars.defaultEventType
            | _ -> GlobalVars.defaultEventType
        match eType with
        | "Event" -> "Event"
        | name when (IsDependsOn name "Event") -> eType
        | _ -> GlobalVars.defaultEventType
    
    // Get all the event handlers from an interface and also from its inherited / implemented interfaces
    let rec GetEventHandler(i : Browser.Interface) = 
        let ownEventHandler = 
            match i.Properties with
            | Some ps -> 
                ps.Properties
                |> Array.choose (fun p' -> 
                       if p'.Type = "EventHandler" && p'.EventHandler.IsSome then 
                           Some({ Name = p'.Name
                                  EventName = p'.EventHandler.Value
                                  EventType = GetEventTypeFromHandler p' i })
                       else None)
                |> List.ofArray
            | None -> []
        
        let extendedEventHandler = 
            match GetInterfaceByName i.Extends with
            | Some i -> GetEventHandler i
            | None -> []
        
        let implementedEventHandler = 
            let implementis = i.Implements |> Array.map GetInterfaceByName
            [ for i' in implementis do
                  yield! match i' with
                         | Some i -> GetEventHandler i
                         | None -> [] ]
        
        // Reason is if an interface doesn't have its own string overload for the addEventListener method,
        // the inherited overloads will be carried along; otherwise all of them will be overriten by its 
        // own overloads, therefore re-declaration is needed
        if ownEventHandler.Length > 0 then 
            List.concat [ ownEventHandler; extendedEventHandler; implementedEventHandler ]
        else []
    
    allInterfaces
    |> Array.map (fun i -> (i.Name, GetEventHandler i))
    |> Map.ofArray

/// Event handler name to event type map
let ehNameToEType = 
    let t = 
        [ for KeyValue(_, ehList) in iNameToEhList do
              yield! (List.map (fun eh -> (eh.Name, eh.EventType)) ehList) ]
        |> List.distinct
    t |> Map.ofList

let GetGlobalPollutor flavor = 
    match flavor with
    | Web | Windows -> browser.Interfaces |> Array.tryFind (fun i -> i.PrimaryGlobal.IsSome)
    | Worker -> worker.Interfaces |> Array.tryFind (fun i -> i.Global.IsSome)

let GetGlobalPollutorName flavor = 
    match GetGlobalPollutor flavor with
    | Some gp -> gp.Name
    | _ -> "Window"

/// Return a sequence of returntype * HashSet<paramCombination> tuple
let GetOverloads (f : Function) (decomposeMultipleTypes : bool) = 
    let getParams (f : Function) = 
        match f with
        | Method m -> 
            [ for p in m.Params do
                  yield { Type = p.Type
                          Name = p.Name
                          Optional = p.Optional.IsSome
                          Variadic = p.Variadic.IsSome } ]
        | Ctor c -> 
            [ for p in c.Params do
                  yield { Type = p.Type
                          Name = p.Name
                          Optional = p.Optional.IsSome
                          Variadic = p.Variadic.IsSome } ]
        | CallBackFun cb -> 
            [ for p in cb.Params do
                  yield { Type = p.Type
                          Name = p.Name
                          Optional = p.Optional.IsSome
                          Variadic = p.Variadic.IsSome } ]
    
    let getReturnType (f : Function) = 
        match f with
        | Method m -> m.Type
        | Ctor _ -> ""
        | CallBackFun cb -> cb.Type
    
    // Some params have the type of "(DOMString or DOMString [] or Number)"
    // we need to transform it into [“DOMString", "DOMString []", "Number"]
    let decomposeTypes (t : string) = t.Trim([| '('; ')' |]).Split([| " or " |], StringSplitOptions.None)
    
    let decomposeParam (p : Param) = 
        [ for t in (decomposeTypes p.Type) do
              yield { Type = t
                      Name = p.Name
                      Optional = p.Optional
                      Variadic = p.Variadic } ]
    
    let pCombList = 
        let pCombs = List<_>()
        
        let rec enumParams (acc : Param list) (rest : Param list) = 
            match rest with
            | p :: ps when p.Type.Contains("or") -> 
                let pOptions = decomposeParam p
                for pOption in pOptions do
                    enumParams (pOption :: acc) ps
            | p :: ps -> enumParams (p :: acc) ps
            | [] -> 
                // Iteration is completed and time to print every param now
                pCombs.Add(List.rev acc) |> ignore
        enumParams [] (getParams f)
        List.ofSeq pCombs
    
    let rTypes = 
        getReturnType f
        |> decomposeTypes
        |> List.ofArray
    
    if decomposeMultipleTypes then 
        [ for pComb in pCombList do
              yield { ParamCombinations = pComb
                      ReturnTypes = rTypes } ]
    else 
        [ { ParamCombinations = getParams f
            ReturnTypes = rTypes } ]

/// Define the subset of events that dedicated workers will use
let workerEventsMap = 
    [ ("close", "CloseEvent")
      ("error", "ErrorEvent")
      ("upgradeneeded", "IDBVersionChangeEvent")
      ("message", "MessageEvent")
      ("loadend", "ProgressEvent")
      ("progress", "ProgressEvent") ]
    |> Map.ofList
