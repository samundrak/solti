const partials = require("./partials");

class ReactPlugin {
  apply(solti) {
    solti.plugin("collectLibraryName", () => {
      console.log("hello i am react");
    });
    // After initlization solti will first collect template helpers from plugins
    solti.plugin("collectTemplateHelpers", template => {
      // Partials must be object, Key as partial name and value as partial string
      template.registerPartials(partia);
    });
  }
}

module.exports = ReactPlugin;
