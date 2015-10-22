
[<EntryPoint>]
let main argv = 
    JS.EmitDomWeb()
    JS.EmitDomWin()
    JS.EmitDomWorker()
    // For typescript only generate for Dom
    TS.EmitDomWeb()
    TS.EmitDomWorker()
    0