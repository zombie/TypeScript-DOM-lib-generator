#r "packages/FAKE/tools/FakeLib.dll"
#load "TS.fsx"

open Fake
open TS.Emit
open System
open System.IO

Target "Run" (fun _ ->
    TS.Emit.EmitDomWeb()
    TS.Emit.EmitDomWorker()
)

let testFile file =
    let baseline = File.ReadAllText("./baselines/" + file).Replace("\r\n", "\n").Trim('\n')
    let newFileWithLFEndings = File.ReadAllText("./generated/" + file).Replace("\r\n", "\n").Trim('\n')
    if String.Equals(baseline, newFileWithLFEndings) then
        String.Empty
    else
        sprintf "\nTest failed: %s is different from baseline file." file

Target "Test" (fun _ ->
    Directory.GetFiles("./baselines")
    |> Array.map (Path.GetFileName >> testFile)
    |> String.concat ""
    |> (fun msg -> if String.IsNullOrEmpty(msg) then tracefn "All tests passed." else failwith msg)
)

"Run" ==> "Test"

RunTargetOrDefault "Test"
