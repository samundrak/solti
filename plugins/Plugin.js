const prettier = require("prettier");
const { getComponentPatternsList } = require("../src/services");

module.exports = class Plugin {
  constructor() {
    this._patterns = [];
    this._partials = {};
    this._fileExtension = 'js';
    this.pathToPatterns = 'REACT_COMPONENT_PATTERNS_LIST'; // default
    this.pathToTemplate = 'REACT_COMPONENT_PATTERN_TEMPLATE'; // default
  }


  /**
   * Must return promise of question modified to provided schema or by adding new question to provided
   *  schema
   * @return {Promise<{}>}
   */
  async getQuestions() {
    return Promise.resolve({});
  }

  /**
   * Must return all available patterns of component
   * @return {Array}
   */
  getPatterns() {
    return this._patterns;
  }

  static contextTransformers(contextTransformers, templateObject) {
    if (contextTransformers[templateObject.code]) {
      return contextTransformers[templateObject.code](templateObject) || {};
    }
    return {};
  }

  /**
   * Path to template of pattern
   * @return {string}
   */
  getPathToTemplate() {
    return this.pathToTemplate;
  }


  /**
   * Partials which will be used across templates
   * @return {*}
   */
  getPartials() {
    return this._partials;
  }

  /**
   * Context to available for template when compiled by handlebars
   * @param answer
   * @param templateObject
   * @return {{}}
   */
  createTemplateContext(answer, templateObject) {


    return {};
  }

  /**
   * Method to format source code, default is prettier, override it to format by other way
   * @param component
   * @return {string}
   */
  getFormattedComponent(component) {
    return prettier.format(component);
  }

  async getQuestions({ schema }) {
    this._patterns = await getComponentPatternsList({ path: this.pathToPatterns });
    schema.component.pattern.choices = this._patterns.map(item => item.name);
    schema.component.pattern.default = schema.component.pattern.choices[0]; // eslint-disable-line
    return schema;
  }

  getFileExtension() {
    return this._fileExtension;
  }
};
