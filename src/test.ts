
import * as fs from "fs";
import * as path from "path";
import child_process from "child_process";

const __SOURCE_DIRECTORY__ = __dirname;
const baselineFolder = path.join(__SOURCE_DIRECTORY__, "../", "baselines");
const outputFolder = path.join(__SOURCE_DIRECTORY__, "../", "generated");

function compareToBaselines() {
    let success = true;
    for (const file of fs.readdirSync(baselineFolder)) {
        let baseline = fs.readFileSync(path.join(baselineFolder, file)).toString().replace(/\r\n/, "\n");
        let generated = fs.readFileSync(path.join(outputFolder, file)).toString().replace(/\r\n/, "\n");
        if (baseline !== generated) {
            console.error(`Test failed: '${file}' is different from baseline file.`);
            success = false;
        }
    }
    return success;

}

function compileGeneratedFile(file: string) {
    let success = true;
    try {
        child_process.execSync(`tsc --strict --lib es5 --noEmit ${path.join(outputFolder, file)}`);
    } catch (e) {
        console.error(`Test failed: could not compile '${file}':`);
        console.error(e.stdout.toString());
        console.error();
        success = false;
    }
    return success;
}

function test() {
    if (compareToBaselines()) {
        if (compileGeneratedFile("dom.generated.d.ts") &&
            compileGeneratedFile("webworker.generated.d.ts")) {
            console.log("All tests passed.");
            process.exit(0);
        }
    }
    process.exit(1);
}

test();