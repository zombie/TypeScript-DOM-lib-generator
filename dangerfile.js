const {message} = require("danger")
const {readFileSync, existsSync} = require("fs")

const diffPath = "baseline-changes.diff"
if (existsSync(diffPath)) {
  const diffContents = readFileSync(diffPath, "utf8")
  message(diffContents)
}
