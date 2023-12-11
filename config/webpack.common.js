const fs = require("fs");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { paths } = require("./scripts");

const htmlFiles = fs
  .readdirSync(paths.src)
  .filter((file) => file.endsWith(".html"));

const htmlPlugins = htmlFiles.map(
  (filename) =>
    new HtmlWebpackPlugin({
      filename,
      template: path.resolve(paths.src, filename),
    })
);

module.exports = {
  context: paths.src,
  entry: "./js/index.js",
  output: {
    path: paths.dist,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.ico$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
    ],
  },
  plugins: [new ESLintPlugin()].concat(htmlPlugins),
};
