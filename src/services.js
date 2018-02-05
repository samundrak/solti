const Resource = require("./resources");
const getResourceAsEnv = require("./utils/getResourceAsEnv");

exports.getReactComponentPatternsList = async () => {
  const response = await Resource.getInstance().get(
    getResourceAsEnv("REACT_COMPONENT_PATTERNS_LIST")
  );
  return JSON.parse(JSON.stringify(response.data));
};
exports.getReactComponentTemplate = async templateCode => {
  const response = await Resource.getInstance().get(
    getResourceAsEnv("REACT_COMPONENT_PATTERN_TEMPLATE", {
      file: `${templateCode}.js`
    })
  );
  return response.data;
};
