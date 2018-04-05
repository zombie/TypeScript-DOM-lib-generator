import * as fs from "fs";
import * as path from "path";
import child_process from "child_process";

const __SOURCE_DIRECTORY__ = __dirname;
const baselineFolder = path.join(__SOURCE_DIRECTORY__, "../", "baselines");
const outputFolder = path.join(__SOURCE_DIRECTORY__, "../", "generated");
const tscPath = path.join(__SOURCE_DIRECTORY__, "../", "node_modules", "typescript", "lib", "tsc.js");

function normalizeLineEndings(text: string): string {
    return text.replace(/\r\n?/g, "\n");
}

function compareToBaselines() {
    for (const file of fs.readdirSync(baselineFolder)) {
        const baseline = normalizeLineEndings(fs.readFileSync(path.join(baselineFolder, file)).toString());
        const generated = normalizeLineEndings(fs.readFileSync(path.join(outputFolder, file)).toString());
        if (baseline !== generated) {
            console.error(`Test failed: '${file}' is different from baseline file.`);
            return false;
        }
    }
    return true;

}

function compileGeneratedFile(file: string) {
    try {
        child_process.execSync(`node ${tscPath} --strict --lib es5 --types --noEmit ${path.join(outputFolder, file)}`);
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
