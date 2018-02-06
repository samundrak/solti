const requireFromString = require('require-from-string');
const Resource = require('./resources');
const getResourceAsEnv = require('./utils/getResourceAsEnv');
const isDev = require('./utils/isDev');

exports.getReactComponentPatternsList = async () => {
  const response = await Resource.get(getResourceAsEnv('REACT_COMPONENT_PATTERNS_LIST'));
  return JSON.parse(JSON.stringify(response.data));
};
exports.getReactComponentTemplate = async (templateCode) => {
  const response = await Resource.get(getResourceAsEnv('REACT_COMPONENT_PATTERN_TEMPLATE', {
    file: `${templateCode}.js`,
  }));
  if (isDev) {
    return response.data;
  }
  return requireFromString(response.data);
};
