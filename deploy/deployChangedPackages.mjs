// @ts-check

// node deploy/deployChangedPackages.mjs
// Builds on the results of createTypesPackages.mjs and deploys the
// ones which have changed.

import * as fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import { spawnSync } from "child_process";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const go = async () => {
  const uploaded = [];

  // Loop through generated packages, deploying versions for anything which has different
  // .d.ts files from the version available on npm.
  const generatedDir = join(__dirname, "generated");
  for (const dirName of fs.readdirSync(generatedDir)) {
    const localPackageJSONPath = join(generatedDir, dirName, "package.json");
    const newTSConfig = fs.readFileSync(localPackageJSONPath, "utf-8");
    const pkgJSON = JSON.parse(newTSConfig);

    const dtsFiles = fs
      .readdirSync(join(generatedDir, dirName))
      .filter((f) => f.endsWith(".d.ts"));

    // Look through each .d.ts file included in a package to
    // determine if anything has changed
    let upload = false;
    for (const file of dtsFiles) {
      const generatedDTSPath = join(generatedDir, dirName, file);
      const generatedDTSContent = fs.readFileSync(generatedDTSPath, "utf8");
      try {
        const unpkgURL = `https://unpkg.com/${pkgJSON.name}/${file}`;
        const npmDTSReq = await fetch(unpkgURL);
        const npmDTSText = await npmDTSReq.text();
        upload = upload || npmDTSText !== generatedDTSContent;
      } catch (error) {
        // Not here, definitely needs to be uploaded
        upload = true;
      }
    }

    // Publish via npm
    if (upload) {
      if (process.env.NODE_AUTH_TOKEN) {
        const publish = spawnSync("npm", ["publish", "--access", "public"], {
          cwd: join("packages", dirName),
        });

        if (publish.status) {
          console.log(publish.stdout?.toString());
          console.log(publish.stderr?.toString());
          process.exit(publish.status);
        } else {
          console.log(publish.stdout?.toString());
        }
      }

      uploaded.push(dirName);
    }
  }

  // Warn if we did a dry run.
  if (!process.env.NODE_AUTH_TOKEN) {
    console.log(
      "Did a dry run because process.env.NODE_AUTH_TOKEN is not set."
    );
  }

  if (uploaded.length) {
    console.log("Uploaded: ", uploaded.join(", "));
  } else {
    console.log("No uploads");
  }
};

go();
