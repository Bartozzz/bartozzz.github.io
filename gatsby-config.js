require("source-map-support").install();
require("ts-node").register({
  transpileOnly: true,
  files: true,
  ignore: ["(?:^|/)node_modules/", "(?:^|/).cache/", "(?:^|/)public/"],
  compilerOptions: {
    module: "CommonJS",
  },
});

module.exports = require("./gatsby/gatsby-config");
