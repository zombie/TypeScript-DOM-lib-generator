import { promises as fs } from "fs";

const webrefDir = new URL("../node_modules/webref/ed/idl/", import.meta.url);

export async function getIdl(specShortName: string) {
    let path = new URL(`${specShortName}.idl`, webrefDir);
    return fs.readFile(path, "utf-8");
}
