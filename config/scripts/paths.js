const path = require("path");

const root = path.join(__dirname, "../../");
const dist = path.join(root, "dist");
const src = path.join(root, "src");

module.exports = {
  root,
  dist,
  src,
};
