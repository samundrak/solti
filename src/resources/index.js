const axios = require('axios');
const isDev = require('../utils/isDev');

class Resource {
  static get(resource) {
    if (isDev) {
      return Promise.resolve({ data: require(resource) }); // eslint-disable-line
    }
    return axios.get(resource).catch((err) => {
      console.log(`\n Error: Unable to create component, ${err.message}.`.red);
      process.exit(0);
    });
  }
}

module.exports = Resource;
