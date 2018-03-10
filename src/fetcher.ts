import * as fs from "fs";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

fetchIDLs();

interface IDLSource {
    url: string;
    title: string;
}

async function fetchIDLs() {
    const file = fs.readFileSync(`${__dirname}/../inputfiles/idlSources.json`, { encoding: "utf-8" });
    const idlSources = JSON.parse(file) as IDLSource[];
    for (const source of idlSources) {
        const idl = await fetchIDL(source);
        fs.writeFileSync(`${__dirname}/../inputfiles/idl/${source.title}.widl`, idl);
    }
}

async function fetchIDL(source: IDLSource) {
    const response = await fetch(source.url);
    const dom = new JSDOM(await response.text());
    const elements = Array.from(dom.window.document.querySelectorAll("pre.idl:not(.extract),code.idl-code"));
    if (!elements.length) {
        throw new Error("Found no IDL code");
    }
    const last = elements[elements.length - 1];
    if (last.previousElementSibling!.textContent!.includes("IDL Index")) {
        // IDL Index includes all IDL codes
        return last.textContent!.trim();
    }
    
    return elements.map(element => element.textContent!.trim()).join('\n\n');
}
