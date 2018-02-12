const requireFromString = require('require-from-string');
const Resource = require('./resources/index');
const getResourceAsEnv = require('./utils/getResourceAsEnv');
const isDev = require('./utils/isDev');

exports.getComponentPatternsList = async ({ path }) => {
  const response = await Resource.get(getResourceAsEnv(path)); // 'REACT_COMPONENT_PATTERNS_LIST'
  return JSON.parse(JSON.stringify(response.data));
};
exports.getComponentTemplate = async ({ path, templateCode }) => {
  const response = await Resource.get(getResourceAsEnv(path, { // 'REACT_COMPONENT_PATTERN_TEMPLATE'
    file: `${templateCode}.js`,
  }));
  if (isDev) {
    return response.data;
  }
  return requireFromString(response.data);
};
