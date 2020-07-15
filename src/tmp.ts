import * as fs from "fs";
import * as path from "path";
import fetch from "node-fetch";
// import { JSDOM } from "jsdom";



interface IDLSource {
    url: string;
    title: string;
    deprecated?: boolean;
    local?: boolean;
}

// const idlSelector = [
//     "pre.idl:not(.extract):not(.example)", // bikeshed and ReSpec
//     "pre.code code.idl-code", // Web Cryptography
//     "pre:not(.extract) code.idl", // HTML
//     "#permission-registry + pre.highlight" // Permissions
// ].join(",");

// const cssPropSelector = [
//     ".propdef dfn", // CSS Fonts, SVG
//     ".propdef-title", // SVG Paint Servers
//     "dfn.css[data-dfn-type=property]"
// ].join(",");


async function fetchIDLs() {
    const idlSources = (require("../inputfiles/idlSources.json") as IDLSource[]);
    await Promise.all(idlSources.map(async source => {
        if (source.local) {
            return;
        }
        await fetchIDL(source);
        // fs.writeFileSync(path.join(__dirname, `../inputfiles/idl/${source.title}.widl`), idl + '\n');
        // if (comments) {
        //     fs.writeFileSync(path.join(__dirname, `../inputfiles/idl/${source.title}.commentmap.json`), comments + '\n');
        // }
    })).then(
        ()=>{
            console.log();
            console.log(deprecatedSet);
        }
    );
}

const tmpLocalFolder = path.join(__dirname, "localIdlSource");
const deprecatedSet = new Set<string>();
// ['https://www.w3.org/TR/css-color-3/', 'https://www.w3.org/TR/credential-management-1/', 'https://www.w3.org/TR/css-text-decor-3/', 'https://w3c.github.io/media-playback-quality/', 'https://www.w3.org/TR/css-text-3/', 'https://drafts.csswg.org/css-images-3/', 'https://www.w3.org/TR/secure-contexts/', 'https://www.w3.org/TR/SVG2/types.html', 'https://html.spec.whatwg.org/multipage/obsolete.html', 'https://notifications.spec.whatwg.org/', 'https://www.w3.org/TR/SVG2/text.html', 'https://fetch.spec.whatwg.org/', 'https://html.spec.whatwg.org/multipage/webappapis.html', 'https://dom.spec.whatwg.org/', 'https://drafts.fxtf.org/css-masking-1/', 'https://www.w3.org/TR/filter-effects-1/', 'https://drafts.csswg.org/cssom/', 'https://w3c.github.io/webrtc-pc/', 'https://webaudio.github.io/web-audio-api/', 'https://heycam.github.io/webidl/', 'https://www.w3.org/TR/SVG2/pservers.html', 'https://www.w3.org/TR/uievents/']
async function fetchIDL(source: IDLSource) {

    if (!fs.existsSync(tmpLocalFolder)) {
        fs.mkdirSync(tmpLocalFolder);
    }

    if (source.url.endsWith(".idl")) {
        return;
    }

    const localFile = path.join(tmpLocalFolder, source.title);
    let webPageContent: string;
    if (fs.existsSync(localFile)) {
        webPageContent = fs.readFileSync(localFile, { encoding: "utf-8" });
    }
    else {
        const response = await fetch(source.url);
        webPageContent = await response.text();
        fs.writeFileSync(localFile, webPageContent);
    }
    if(webPageContent.toLowerCase().includes("deprecated")){
        deprecatedSet.add(source.url);
    }
    // const dom = JSDOM.fragment(
    //     ""// webPageContent
    //     );

}

// function extractIDL(dom: DocumentFragment) {
//     const elements = Array.from(dom.querySelectorAll(idlSelector))
//         .filter(el => {
//             if (el.parentElement && el.parentElement.classList.contains("example")) {
//                 return false;
//             }
//             const previous = el.previousElementSibling;
//             if (!previous) {
//                 return true;
//             }
//             return !previous.classList.contains("atrisk") && !previous.textContent!.includes("IDL Index");
//         });
//     return elements.map(element => trimCommonIndentation(element.textContent!).trim()).join('\n\n');
// }

// function extractCSSDefinitions(dom: DocumentFragment) {
//     const properties = Array.from(dom.querySelectorAll(cssPropSelector))
//         .map(element => element.textContent!.trim());

//     if (!properties.length) {
//         return "";
//     }

//     return `partial interface CSSStyleDeclaration {${
//         properties.map(property => `\n  [CEReactions] attribute [LegacyNullToEmptyString] CSSOMString ${
//             hyphenToCamelCase(property)
//             };`).join("")
//         }\n};`;
// }

// function hyphenToCamelCase(name: string) {
//     const camel = name
//         .replace(/^-(\w)/, (_, c) => c)
//         .replace(/-(\w)/g, (_, c) => c.toUpperCase());
//     return camel === "float" ? "_float" : camel;
// }

// function processComments(dom: DocumentFragment) {
//     const elements = [...dom.querySelectorAll("dl.domintro")];
//     if (!elements.length) {
//         return undefined;
//     }

//     const result: Record<string, string> = {};
//     for (const element of elements) {
//         for (const { dt, dd } of generateDescriptionPairs(element)) {
//             elements.push(...importNestedList(dd));
//             const comment = dd
//                 .map(desc => {
//                     desc.normalize();
//                     convertChildPre(desc);
//                     return innerText(desc).replace(/’/g, "'");
//                 })
//                 .filter(text => text)
//                 .join("\n\n");
//             for (const key of dt.map(term => getKey(term.innerHTML))) {
//                 if (!key) {
//                     continue;
//                 }
//                 const retargeted = retargetCommentKey(key, dom);
//                 // prefer the first description
//                 if (!result[retargeted]) {
//                     result[retargeted] = comment;
//                 }
//             }
//         }
//     }
//     if (!Object.keys(result).length) {
//         return undefined;
//     }
//     return JSON.stringify(result, undefined, 4);
// }

// function convertChildPre(e: Element) {
//     for (const pre of e.querySelectorAll("pre")) {
//         const code = pre.querySelector(":scope > code") as HTMLElement;
//         if (!code) {
//             continue;
//         }
//         const text = innerText(code, {
//             getComputedStyle(_: Element) {
//                 return { whiteSpace: "pre" } as CSSStyleDeclaration;
//             }
//         });
//         pre.textContent = "```\n" + text + "\n```";
//     }
// }

// function getKey(s: string) {
//     const keyRegexp = /#dom-([a-zA-Z0-9-_]+)/i;
//     const match = s.match(keyRegexp);
//     if (match) {
//         return match[1];
//     }
//     return undefined;
// }

// function* generateDescriptionPairs(domIntro: Element) {
//     const dt: HTMLElement[] = [];
//     const dd: HTMLElement[] = [];
//     let element = domIntro.firstElementChild;
//     while (element) {
//         switch (element.localName) {
//             case "dt":
//                 if (dd.length) {
//                     yield { dt: [...dt], dd: [...dd] };
//                     dt.length = dd.length = 0;
//                 }
//                 dt.push(element as HTMLElement)
//                 break;
//             case "dd":
//                 dd.push(element as HTMLElement)
//                 break;
//             default:
//                 debugger;
//         }
//         element = element.nextElementSibling;
//     }
//     if (dd.length) {
//         yield { dt: [...dt], dd: [...dd] };
//     }
// }

// function* importNestedList(elements: Element[]) {
//     for (const element of elements) {
//         for (const dl of element.getElementsByTagName("dl")) {
//             dl.remove();
//             yield dl;
//         }
//     }
// }

// /**
//  * Specifications tends to keep existing keys even after a member relocation
//  * so that external links can be stable and won't broken.
//  */
// function retargetCommentKey(key: string, dom: DocumentFragment) {
//     const [parent, member] = key.split(/-/g);
//     if (!member) {
//         return parent;
//     }
//     const dfn = dom.getElementById(`dom-${key}`);
//     if (!dfn || !dfn.dataset.dfnFor) {
//         // The optional third word is for overloads and can be safely ignored.
//         return `${parent}-${member}`;
//     }
//     return `${dfn.dataset.dfnFor.toLowerCase()}-${member}`;
// }

// /**
//  * Remove common indentation:
//  *     <pre>
//  *       typedef Type = "type";
//  *
//  *       dictionary Dictionary {
//  *         "member"
//  *       };
//  *     </pre>
//  * Here the textContent has 6 common preceding whitespaces that can be unindented.
//  */
// function trimCommonIndentation(text: string) {
//     const lines = text.split("\n");
//     if (!lines[0].trim()) {
//         lines.shift();
//     }
//     if (!lines[lines.length - 1].trim()) {
//         lines.pop();
//     }
//     const commonIndentation = Math.min(...lines.filter(line => line.trim()).map(getIndentation));
//     return lines.map(line => line.slice(commonIndentation)).join("\n");
// }

// /** Count preceding whitespaces */
// function getIndentation(line: string) {
//     let count = 0;
//     for (const ch of line) {
//         if (ch !== " ") {
//             break;
//         }
//         count++;
//     }
//     return count;
// }

fetchIDLs();