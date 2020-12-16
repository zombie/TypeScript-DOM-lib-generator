import { createRequire } from "module";

export function createTryRequire(path: string) {
  const require = createRequire(path);
  return (id: string) => {
    try {
      return require(id);
    } catch (err) {
      if (err.code !== "MODULE_NOT_FOUND") {
        throw err;
      }
      return;
    }
  }
}
