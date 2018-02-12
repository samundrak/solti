const Plugin = require('../Plugin');
var beautify_html = require('js-beautify').html;
const partials = require('./partials');

class Vue extends Plugin {
  constructor() {
    super();
    this._patterns = [];
    this._partials = partials;
    this._fileExtension = 'vue';
    this.label = 'Vue';
    this.code = 'vue';
    this.pathToPatterns = 'VUE_COMPONENT_PATTERNS_LIST';
    this.pathToTemplate = 'VUE_COMPONENT_PATTERN_TEMPLATE'; // default
  }

  getFormattedComponent(component) {
    if (this._fileExtension === 'js') {
      return super.getFormattedComponent(component);
    }
    return beautify_html(component, {
      "indent_size": 2,
      "html": {
        "end_with_newline": true,
        "js": {
          "indent_size": 2
        },
        "css": {
          "indent_size": 2
        }
      },
      "css": {
        "indent_size": 1
      },
    });
  }

  async getQuestions({ schema }) {
    return Vue.transformQuestions(await super.getQuestions({ schema }));
  }

  static transformQuestions(schema) {
    schema.component.isStyle = {
      message: 'Do you want to add styling?',
      type: 'confirm',
      required: true,
      default: true,
    };
    return schema;
  }


  createTemplateContext(answer, templateObject) {
    const context = {
      isPropTypes: answer.component.isPropTypes,
      componentName: answer.component.name,
      isStyle: answer.component.isStyle
    };

    if (answer.component.props !== "null") {
      context.props = (context.props || []).concat(
        (answer.component.props || "").split(",").map(prop => ({
          key: prop,
          value: "{ type: String, required: true}"
        }))
      );
    }
    if (templateObject.code === 'functional') {
      this._fileExtension = 'js';
    }
    return context;
  }
}

module.exports = Vue;
