const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const partials = require("./resources/templates/partials");
const { getReactComponentTemplate } = require("./services");

class Template {
  static registerPartials() {
    Object.keys(partials).forEach(partialName => {
      Handlebars.registerPartial(partialName, partials[partialName]);
    });
  }

  static async parse(templateCode) {
    try {
      const rawTemplate = await getReactComponentTemplate(templateCode);
      const template = Handlebars.compile(rawTemplate);
      return template;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = Template;
