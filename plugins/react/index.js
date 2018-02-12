const partials = require('./partials');

const Plugin = require('../Plugin');
const contextTransformers = require("./contextTransformers");

class ReactPlugin extends Plugin {

  constructor() {
    super();
    this._patterns = [];
    this._partials = partials;
    this.pathToPatterns = 'REACT_COMPONENT_PATTERNS_LIST';
    this.pathToTemplate = 'REACT_COMPONENT_PATTERN_TEMPLATE';
    this.label = 'React';
    this.code = 'react';
  }

  createTemplateContext(answer, templateObject) {
    const context = {
      isPropTypes: answer.component.isPropTypes,
      componentName: answer.component.name,
      ...ReactPlugin.contextTransformers(contextTransformers, templateObject),
    };

    if (answer.component.props !== "null") {
      context.props = (context.props || []).concat(
        (answer.component.props || "").split(",").map(prop => ({
          key: prop,
          value: "any.isRequired"
        }))
      );
    }

    return context;
  }

}

module.exports = ReactPlugin;
