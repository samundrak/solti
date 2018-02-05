const fs = require("fs");
const axios = require("axios");
const { promisify } = require("util");
const colors = require("colors");
const isDev = require("../utils/isDev");

class Resource {
  constructor() {
    if (Resource.INSTANCE) {
      throw new Error("Resource instance has been already created.");
    }
  }

  get(resource) {
    if (isDev) {
      return Promise.resolve({ data: require(resource) }); // eslint-disable-line
    }
    return axios.get(resource).catch(err => {
      console.log(`\n Error: Unable to create component, ${err.message}.`.red);
      process.exit(0);
    });
  }

  static getInstance() {
    if (Resource.INSTANCE === null) {
      Resource.INSTANCE = new Resource();
    }
    return Resource.INSTANCE;
  }
}

Resource.INSTANCE = null;
module.exports = Resource;
