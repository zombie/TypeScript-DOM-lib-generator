// @ts-check

// node deploy/createTypesPackages.js

// prettier-ignore
export const packages = [
  {
    name: "@types/web",
    description: "Types for the DOM, and other web technologies in browsers",
    readme: "./readmes/web.md",
    files: [
      { from: "../generated/dom.generated.d.ts", to: "index.d.ts" },
      { from: "../generated/dom.iterable.generated.d.ts", to: "index.iterable.d.ts", autoImport: true },
    ],
  },
  {
    name: "@types/serviceworker",
    description: "Types for the global scope of Service Workers",
    readme: "./readmes/serviceworker.md",
    files: [
      { from: "../generated/serviceworker.generated.d.ts", to: "index.d.ts" },
      { from: "../generated/serviceworker.iterable.generated.d.ts", to: "index.iterable.d.ts", autoImport: true  },
    ],
  },
  {
    name: "@types/audioworklet",
    description: "Types for the global scope of Audio Worklets",
    readme: "./readmes/audioworklet.md",
    files: [
      { from: "../generated/audioworklet.generated.d.ts", to: "index.d.ts" },
      { from: "../generated/audioworklet.iterable.generated.d.ts", to: "index.iterable.d.ts", autoImport: true  },
    ],
  },
  {
    name: "@types/sharedworker",
    description: "Types for the global scope of Shared Workers",
    readme: "./readmes/sharedworker.md",
    files: [
      { from: "../generated/sharedworker.generated.d.ts", to: "index.d.ts" },
      { from: "../generated/sharedworker.iterable.generated.d.ts", to: "index.iterable.d.ts", autoImport: true },
    ],
  },
];

// Note: You can add 'version: "1.0.0"' to a package above
// to set the major or minor, otherwise it will always bump
// the patch.

import fs from "fs";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import semver from "semver";
import pkg from "prettier";
const { format } = pkg;
import { execSync } from "child_process";

const go = async () => {
  const gitSha = execSync("git rev-parse HEAD").toString().trim().slice(0, 7);

  const generatedDir = new URL("generated/", import.meta.url);
  const templateDir = new URL("template/", import.meta.url);

  for (const pkg of packages) {
    const folderName = pkg.name.replace("@", "").replace("/", "-");
    const packagePath = new URL(`${folderName}/`, generatedDir);

    if (fs.existsSync(packagePath)) {
      await fs.promises.rm(packagePath, { recursive: true });
    }
    fs.mkdirSync(packagePath, { recursive: true });

    // Migrate in the template files
    for (const templateFile of fs.readdirSync(templateDir)) {
      if (templateFile.startsWith(".")) continue;

      const templatedFile = new URL(templateFile, templateDir);
      fs.copyFileSync(templatedFile, new URL(templateFile, packagePath));
    }

    // Add the reference files in the config above
    pkg.files.forEach((fileRef) => {
      fs.copyFileSync(
        new URL(fileRef.from, import.meta.url),
        new URL(fileRef.to, packagePath)
      );
    });

    prependAutoImports(pkg, packagePath);

    // Setup the files in the repo
    const newPkgJSON = await updatePackageJSON(pkg, packagePath, gitSha);
    copyREADME(pkg, newPkgJSON, new URL("README.md", packagePath));

    // Done
    console.log("Built:", pkg.name);
  }
};

async function updatePackageJSON(pkg, packagePath, gitSha) {
  const pkgJSONPath = new URL("package.json", packagePath);
  const packageText = fs.readFileSync(pkgJSONPath, "utf8");
  const packageJSON = JSON.parse(packageText);
  packageJSON.name = pkg.name;
  packageJSON.description = pkg.description;

  // Bump the last version of the number from npm,
  // or use the _version in tsconfig if it's higher,
  // or default to 0.0.1
  let version = pkg.version || "0.0.1";
  try {
    const npmResponse = await fetch(
      `https://registry.npmjs.org/${packageJSON.name}`
    );
    const npmPackage = await npmResponse.json();

    const semverMarkers = npmPackage["dist-tags"].latest.split(".");
    const bumpedVersion = `${semverMarkers[0]}.${semverMarkers[1]}.${
      Number(semverMarkers[2]) + 1
    }`;

    if (semver.gt(bumpedVersion, version)) {
      version = bumpedVersion;
    }
  } catch (error) {
    console.error("Caught error in grabbing version for package");
    console.error(error);
    // NOOP, this is for the first deploy, which will set it to 0.0.1
  }

  packageJSON.version = version;
  packageJSON.domLibGeneratorSha = gitSha;

  fs.writeFileSync(
    pkgJSONPath,
    format(JSON.stringify(packageJSON), {
      filepath: fileURLToPath(pkgJSONPath),
    })
  );

  return packageJSON;
}

// Copies the README and adds some rudimentary templating to the file.
function copyREADME(pkg, pkgJSON, writePath) {
  let readme = fs.readFileSync(new URL(pkg.readme, import.meta.url), "utf-8");

  const htmlEncodedTag =
    encodeURIComponent(pkgJSON.name) + "%40" + pkgJSON.version;

  readme = readme
    .replace("{{version}}", pkgJSON.version)
    .replace(
      "{{release_href}}",
      `https://github.com/microsoft/TypeScript-DOM-lib-generator/releases/tag/${htmlEncodedTag}`
    );

  fs.writeFileSync(writePath, readme);
}

// Appends any files marked as autoImport in the metadata.
function prependAutoImports(pkg, packagePath) {
  const index = new URL("index.d.ts", packagePath);
  if (!fs.existsSync(index)) return;

  const toPrepend = pkg.files
    .filter((f) => !!f.autoImport)
    .map((f) => `/// <reference path="./${f.to}" />`)
    .join("\n");

  let indexText = fs.readFileSync(index, "utf-8");
  fs.writeFileSync(index, `${toPrepend}\n\n${indexText}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await go();
}
