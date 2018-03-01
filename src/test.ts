import * as fs from "fs";
import * as path from "path";
import child_process from "child_process";

const __SOURCE_DIRECTORY__ = __dirname;
const baselineFolder = path.join(__SOURCE_DIRECTORY__, "../", "baselines");
const outputFolder = path.join(__SOURCE_DIRECTORY__, "../", "generated");
const tscPath = path.join(__SOURCE_DIRECTORY__, "../", "node_modules", "typescript", "lib", "tsc.js");

function compareToBaselines() {
    for (const file of fs.readdirSync(baselineFolder)) {
        const baseline = fs.readFileSync(path.join(baselineFolder, file)).toString().replace(/\r\n/, "\n");
        const generated = fs.readFileSync(path.join(outputFolder, file)).toString().replace(/\r\n/, "\n");
        if (baseline !== generated) {
            console.error(`Test failed: '${file}' is different from baseline file.`);
            return false;
        }
    }
    return true;

}

function compileGeneratedFile(file: string) {
    try {
        child_process.execSync(`node ${tscPath} --strict --lib es5 --noEmit ${path.join(outputFolder, file)}`);
    } catch (e) {
        console.error(`Test failed: could not compile '${file}':`);
        console.error(e.stdout.toString());
        console.error();
        return false;
    }
    return true;
}

function test() {
    if (compareToBaselines() &&
        compileGeneratedFile("dom.generated.d.ts") &&
        compileGeneratedFile("webworker.generated.d.ts")) {
        console.log("All tests passed.");
        process.exit(0);
    }
    process.exit(1);
}

test();