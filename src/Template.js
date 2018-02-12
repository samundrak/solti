const Handlebars = require("handlebars");
const { getComponentTemplate } = require("./services");

class Template {
  static registerHelpers() {
    Handlebars.registerHelper('raw', function (content) {
      return content.fn();
    });
  }

  static registerPartials(partials) {
    Object.keys(partials).forEach(partialName => {
      Handlebars.registerPartial(partialName, partials[partialName]);
    });
  }

  static async parse({ path, templateCode }) {
    try {
      const rawTemplate = await getComponentTemplate({ path, templateCode });
      return Handlebars.compile(rawTemplate);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Template;
