const path = require("path");
const paths = require("./paths");
const pjson = require(path.resolve(paths.root, "package.json"));

const getPublicPath = () => {
  const rawPath = pjson.homepage?.split("/")[3];
  return rawPath ? `/${rawPath}/` : "/";
};

module.exports = getPublicPath;
