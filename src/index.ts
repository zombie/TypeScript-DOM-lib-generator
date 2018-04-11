import * as Browser from "./types";
import * as fs from "fs";
import * as path from "path";
import { filter, merge, filterProperties, getEmptyWebIDL } from "./helpers";
import { Flavor, emitWebIDl } from "./emitter";
import { convert } from "./widlprocess";

function emitDomWorker(webidl: Browser.WebIdl, knownWorkerTypes: Set<string>, tsWorkerOutput: string) {
    const worker = getEmptyWebIDL();
    const isKnownWorkerName = (o: { name: string }) => knownWorkerTypes.has(o.name);

    if (webidl["callback-functions"]) worker["callback-functions"]!["callback-function"] = filterProperties(webidl["callback-functions"]!["callback-function"], isKnownWorkerName);
    if (webidl["callback-interfaces"]) worker["callback-interfaces"]!.interface = filterProperties(webidl["callback-interfaces"]!.interface, isKnownWorkerName);
    if (webidl.dictionaries) worker.dictionaries!.dictionary = filterProperties(webidl.dictionaries.dictionary, isKnownWorkerName);
    if (webidl.enums) worker.enums!.enum = filterProperties(webidl.enums.enum, isKnownWorkerName);
    if (webidl.mixins) worker.mixins!.mixin = filterProperties(webidl.mixins.mixin, isKnownWorkerName);
    if (webidl.interfaces) worker.interfaces!.interface = filterProperties(webidl.interfaces.interface, isKnownWorkerName);
    if (webidl.typedefs) worker.typedefs!.typedef = webidl.typedefs.typedef.filter(t => knownWorkerTypes.has(t["new-type"]));

    const result = emitWebIDl(worker, Flavor.Worker);
    fs.writeFileSync(tsWorkerOutput, result);
    return;
}

function emitDomWeb(webidl: Browser.WebIdl, tsWebOutput: string) {
    const browser = filter(webidl, o => {
        return !(o && typeof o.exposed === "string"
            && o.exposed.includes("Worker") && !o.exposed.includes("Window"));
    });

    const result = emitWebIDl(browser, Flavor.Web);
    fs.writeFileSync(tsWebOutput, result);
    return;
}

function emitES6DomIterators(webidl: Browser.WebIdl, tsWebES6Output: string) {
    fs.writeFileSync(tsWebES6Output, emitWebIDl(webidl, Flavor.ES6Iterators));
}

function emitDom() {
    const __SOURCE_DIRECTORY__ = __dirname;
    const inputFolder = path.join(__SOURCE_DIRECTORY__, "../", "inputfiles");
    const outputFolder = path.join(__SOURCE_DIRECTORY__, "../", "generated");

    // Create output folder
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    const tsWebOutput = path.join(outputFolder, "dom.generated.d.ts");
    const tsWebES6Output = path.join(outputFolder, "dom.es6.generated.d.ts");
    const tsWorkerOutput = path.join(outputFolder, "webworker.generated.d.ts");


    const overriddenItems = require(path.join(inputFolder, "overridingTypes.json"));
    const addedItems = require(path.join(inputFolder, "addedTypes.json"));
    const comments = require(path.join(inputFolder, "comments.json"));
    const removedItems = require(path.join(inputFolder, "removedTypes.json"));
    const widlStandardTypes = fs.readdirSync(path.join(inputFolder, "idl")).map(
        filename => fs.readFileSync(path.join(inputFolder, "idl", filename), { encoding: "utf-8" })
    ).map(convert);

    /// Load the input file
    let webidl: Browser.WebIdl = require(path.join(inputFolder, "browser.webidl.preprocessed.json"));

    const knownWorkerTypes = new Set<string>(require(path.join(inputFolder, "knownWorkerTypes.json")));

    for (const w of widlStandardTypes) {
        webidl = merge(webidl, w.browser, true);
    }
    for (const w of widlStandardTypes) {
        for (const partial of w.partialInterfaces) {
            const base = webidl.interfaces!.interface[partial.name];
            if (base) {
                merge(base.constants, partial.constants, true);
                merge(base.methods, partial.methods, true);
                merge(base.properties, partial.properties, true);
            }
        }
        for (const partial of w.partialDictionaries) {
            const base = webidl.dictionaries!.dictionary[partial.name];
            if (base) {
                merge(base.members, partial.members, true);
            }
        }
        for (const include of w.includes) {
            const target = webidl.interfaces!.interface[include.target];
            if (target) {
                if (target.implements) {
                    target.implements.push(include.includes);
                }
                else {
                    target.implements = [include.includes];
                }
            }
        }
    }
    webidl = prune(webidl, removedItems);
    webidl = merge(webidl, addedItems);
    webidl = merge(webidl, overriddenItems);
    webidl = merge(webidl, comments);

    emitDomWeb(webidl, tsWebOutput);
    emitDomWorker(webidl, knownWorkerTypes, tsWorkerOutput);
    emitES6DomIterators(webidl, tsWebES6Output);

    function prune(obj: Browser.WebIdl, template: Partial<Browser.WebIdl>): Browser.WebIdl {
        const result = getEmptyWebIDL();

        if (obj["callback-functions"]) result["callback-functions"]!["callback-function"] = filterProperties(obj["callback-functions"]!["callback-function"], (cb) => !(template["callback-functions"] && template["callback-functions"]!["callback-function"][cb.name]));
        if (obj["callback-interfaces"]) result["callback-interfaces"]!.interface = filterInterface(obj["callback-interfaces"]!.interface, template["callback-interfaces"] && template["callback-interfaces"]!.interface);
        if (obj.dictionaries) result.dictionaries!.dictionary = filterDictionary(obj.dictionaries.dictionary, template.dictionaries && template.dictionaries.dictionary);
        if (obj.enums) result.enums!.enum = filterEnum(obj.enums.enum, template.enums && template.enums.enum);
        if (obj.mixins) result.mixins!.mixin = filterInterface(obj.mixins.mixin, template.mixins && template.mixins.mixin);
        if (obj.interfaces) result.interfaces!.interface = filterInterface(obj.interfaces.interface, template.interfaces && template.interfaces.interface);
        if (obj.typedefs) result.typedefs!.typedef = obj.typedefs.typedef.filter(t => !(template.typedefs && template.typedefs.typedef.find(o => o["new-type"] === t["new-type"])));

        return result;

        function filterInterface(interfaces: Record<string, Browser.Interface>, template: Record<string, Browser.Interface> | undefined) {
            if (!template) return interfaces;
            const result = interfaces;
            for (const k in result) {
                if (result[k].properties) {
                    result[k].properties!.property = filterProperties(interfaces[k].properties!.property, p => !(template[k] && template[k].properties && template[k].properties!.property[p.name]));
                }
                if (result[k].methods) {
                    result[k].methods!.method = filterProperties(interfaces[k].methods!.method, m => !(template[k] && template[k].methods && template[k].methods!.method[m.name]));
                }
            }
            return result;
        }

        function filterDictionary(dictinaries: Record<string, Browser.Dictionary>, template: Record<string, Browser.Dictionary> | undefined) {
            if (!template) return dictinaries;
            const result = dictinaries;
            for (const k in result) {
                if (result[k].members) {
                    result[k].members!.member = filterProperties(dictinaries[k].members!.member, m => !(template[k] && template[k].members && template[k].members!.member[m.name]));
                }
            }
            return result;
        }
        function filterEnum(enums: Record<string, Browser.Enum>, template: Record<string, Browser.Enum> | undefined) {
            if (!template) return enums;
            return filterProperties(enums, i => !template[i.name]);
        }
    }
}

emitDom();
