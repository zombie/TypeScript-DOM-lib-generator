import * as fs from "fs";
import * as path from "path";
import { filter } from "./helpers";

const __SOURCE_DIRECTORY__ = __dirname;
const inputFolder = path.join(__SOURCE_DIRECTORY__, "../", "inputfiles");

function preprocess() {
    const webidl = require(path.join(inputFolder, "browser.webidl.json"));

    const browser = filter(webidl, (o, n) => {
        if (o) {
            if (typeof o.tags === "string") {
                if (o.tags.indexOf("MSAppOnly") > -1) return false;
                if (o.tags.indexOf("MSAppScheduler") > -1) return false;
                if (o.tags.indexOf("Diagnostics") > -1) return false;
                if (o.tags.indexOf("Printing") > -1) return false;
                if (o.tags.indexOf("WinPhoneOnly") > -1) return false;
                if (o.tags.indexOf("IEOnly") > -1) return false;
            }
            if (typeof o.exposed === "string") {
                if (o.exposed.indexOf("Diagnostics") > -1) return false;
                if (o.exposed.indexOf("WorkerDiagnostics") > -1) return false;
                if (o.exposed.indexOf("Isolated") > -1) return false;
            }
            if (o.iterable === "pair-iterator") return false;
            if (o.name === "Function") return false;
            if (o.name === "MSExecAtPriorityFunctionCallback") return false;
            if (o.name === "MSUnsafeFunctionCallback") return false;
        }
        if (typeof n === "string") {
            if (n.indexOf("-") === 0) return false;
        }
        return true;
    });


    fs.writeFileSync(path.join(inputFolder, "browser.webidl.preprocessed.json"), JSON.stringify(browser, undefined, 4));
}

preprocess();