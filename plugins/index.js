const ReactPlugin = require("./react/index");
const VuePlugin = require("./vue/index");

module.exports = [
  new ReactPlugin(),
  new VuePlugin(),
];
