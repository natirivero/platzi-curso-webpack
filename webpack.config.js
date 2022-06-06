const path = requier("path");

module.export = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirmane, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
};
