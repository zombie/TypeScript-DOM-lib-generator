import * as fs from "fs";
import * as path from "path";

const __SOURCE_DIRECTORY__ = __dirname;
const inputFolder = path.join(__SOURCE_DIRECTORY__, "../", "inputfiles");

function filter(obj: any, fn: (o: any, n: string | undefined) => boolean) {
    var result = obj;
    if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            var newArray: any[] = [];
            for (const e of obj) {
                if (fn(e, undefined)) {
                    newArray.push(filter(e, fn));
                }
            }
            return newArray;
        }
        else {
            result = {};
            for (const e in obj) {
                if (fn(obj[e], e)) {
                    result[e] = filter(obj[e], fn);
                }
            }
        }
    }
    return result;
}

function preprocess() {
    let webidl = require(path.join(inputFolder, "browser.webidl.json"));

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