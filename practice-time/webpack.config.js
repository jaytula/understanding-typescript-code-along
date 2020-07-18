const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ }],
  },
};
