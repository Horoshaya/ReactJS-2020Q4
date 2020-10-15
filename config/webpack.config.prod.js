const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "production",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8000,
    open: true,
  },
});
