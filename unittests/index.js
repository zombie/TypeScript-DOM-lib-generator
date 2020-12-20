import { execSync } from "child_process";
import { readdir } from "fs/promises";

for (const filename of await readdir(new URL("files/", import.meta.url))) {
    execSync(`npx tsc generated/dom.generated.d.ts unittests/files/${filename} --target es2020 --lib es2020 --noEmit --skipLibCheck`, {
      stdio: "inherit"
    });
}
