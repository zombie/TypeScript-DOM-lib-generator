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

async function fetchIDLs() {
    const idlSources = (require("../inputfiles/idlSources.json") as IDLSource[]);
    await Promise.all(idlSources.map(async source => {
        if (source.local) {
            return;
        }
        await fetchIDL(source);
    })).then(
        () => {
            fs.writeFileSync(path.join(__dirname, 'idlSourcePossiable.json'), JSON.stringify(Array.from(deprecatedSet)));
        }
    );
}
// ['https://www.w3.org/TR/css-color-3/', 'https://www.w3.org/TR/credential-management-1/', 'https://www.w3.org/TR/css-text-decor-3/', 'https://w3c.github.io/media-playback-quality/', 'https://www.w3.org/TR/css-text-3/', 'https://drafts.csswg.org/css-images-3/', 'https://www.w3.org/TR/secure-contexts/', 'https://www.w3.org/TR/SVG2/types.html', 'https://html.spec.whatwg.org/multipage/obsolete.html', 'https://notifications.spec.whatwg.org/', 'https://www.w3.org/TR/SVG2/text.html', 'https://fetch.spec.whatwg.org/', 'https://html.spec.whatwg.org/multipage/webappapis.html', 'https://dom.spec.whatwg.org/', 'https://drafts.fxtf.org/css-masking-1/', 'https://www.w3.org/TR/filter-effects-1/', 'https://drafts.csswg.org/cssom/', 'https://w3c.github.io/webrtc-pc/', 'https://webaudio.github.io/web-audio-api/', 'https://heycam.github.io/webidl/', 'https://www.w3.org/TR/SVG2/pservers.html', 'https://www.w3.org/TR/uievents/']

const tmpLocalFolder = path.join(__dirname, "localIdlSource");
const deprecatedSet = new Set<string>();

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
    if (webPageContent.toLowerCase().includes("deprecated")) {
        deprecatedSet.add(source.url);
    }
    // const dom = JSDOM.fragment(
    //     ""// webPageContent
    //     );

}

fetchIDLs();