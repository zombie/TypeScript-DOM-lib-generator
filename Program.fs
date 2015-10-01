
[<EntryPoint>]
let main argv = 
    JS.DumpDomWeb()
    JS.DumpDomWin()
    JS.DumpDomWorker()
    // For typescript only generate for Dom
    TS.DumpDomWeb()
    TS.DumpDomWorker()
    0