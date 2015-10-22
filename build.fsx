#r "packages/FAKE/tools/FakeLib.dll"
#load "Shared.fsx"
#load "TS.fsx"
#load "JS.fsx"

open Fake
open TS
open JS
open System.IO

Target "Run" (fun _ ->
    JS.EmitDomWeb()
    JS.EmitDomWin()
    JS.EmitDomWorker()
    // For typescript only generate for Dom
    TS.EmitDomWeb()
    TS.EmitDomWorker()
)

let testFile file =
    let baseline = "./baselines/" + file
    let newFile = "./generated/" + file
    if FilesAreEqual (FileInfo baseline) (FileInfo newFile) then
        tracefn "Test passed: %s." newFile
    else
        traceError (sprintf "Test failed: %s is different from baseline file." newFile)

Target "Test" (fun _ ->
    Directory.GetFiles("./baselines")
    |> Array.map Path.GetFileName
    |> Array.iter testFile
)

"Run" ==> "Test"

RunTargetOrDefault "Test"
