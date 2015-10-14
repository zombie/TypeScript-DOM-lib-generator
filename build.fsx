#r "packages/FAKE/tools/FakeLib.dll"
open Fake

let buildDir = "./bin"

Target "Clean" (fun _ ->
    CleanDir buildDir
)

Target "Build" (fun _ ->
    !! "Generator.fsproj"
        |> MSBuildRelease buildDir "Build"
        |> Log "Build output: "
)

Target "DoneBuilding" (fun _ ->
    trace "Done building."
)

"Clean"
    ==> "Build"
    ==> "DoneBuilding"

RunTargetOrDefault "DoneBuilding"
