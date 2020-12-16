import { readFile } from "fs/promises";

export async function tryReadFile(path: string | URL) {
  try {
    return await readFile(path, "utf-8");
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }
}
