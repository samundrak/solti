const Plugin = require('../Plugin');
const partials = require('./partials');

class Vue extends Plugin {
  constructor() {
    super();
    this._patterns = [];
    this.partials = partials;
    this.label = 'Vue';
    this.code = 'vue';
    this.pathToPatterns = 'VUE_COMPONENT_PATTERNS_LIST';
    this.pathToTemplate = 'VUE_COMPONENT_PATTERN_TEMPLATE'; // default
  }

}

module.exports = Vue;
