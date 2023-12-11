const portFinderSync = require("portfinder-sync");
const { merge } = require("webpack-merge");
const CommonWebpackConfig = require("./webpack.common");

const basePort = 8080;

module.exports = merge(CommonWebpackConfig, {
  mode: "development",
  output: {
    filename: "js/[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
      {
        test: /\.mp4$/i,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
      {
        test: /\.woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
    ],
  },
  devServer: {
    open: true,
    port: portFinderSync.getPort(basePort),
  },
  devtool: "eval",
});
