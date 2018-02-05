const path = require("path");
const isDev = require("./isDev");
const CONST = require("../consts");

module.exports = (resource, { file = "" } = {}) => {
  if (isDev) {
    return path.join(__dirname, "../../", CONST[resource].LOCAL, file);
  }
  return file ? `${CONST[resource].REMOTE}/${file}` : CONST[resource].REMOTE;
};
