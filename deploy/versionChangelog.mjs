// @ts-check

// npm run ts-changelog @types/web 0.0.1 0.0.3

import { generateChangelogFrom } from "../lib/changelog.js";
import fetch from "node-fetch";

const [name, before, to] = process.argv.slice(2);
if (!name || !before || !to) {
  throw new Error(
    "Expected three arguments: package name, version before, version to"
  );
}

const go = async () => {
  const allFiles = `https://unpkg.com/${name}/?meta`;
  const npmFileReq = await fetch(allFiles);
  const npmDTSFiles = await npmFileReq.json();
  const dtsFiles = npmDTSFiles.files.filter((f) => f.path.endsWith(".d.ts"));

  for (const file of dtsFiles) {
    const beforeURI = `https://unpkg.com/${name}@${before}${file.path}`;
    const npmBeforeFileReq = await fetch(beforeURI);
    const npmBeforeFileText = await npmBeforeFileReq.text();

    const toURI = `https://unpkg.com/${name}@${to}${file.path}`;
    const npmToFileReq = await fetch(toURI);
    const npmToFileText = await npmToFileReq.text();

    const title = `\n## \`${file.path.slice(1)}\`\n`;
    const notes = generateChangelogFrom(npmBeforeFileText, npmToFileText);

    console.log(title);
    console.log(notes.trim() === "" ? "No changes" : notes);
  }
};
go();
