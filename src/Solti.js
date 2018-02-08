const prettier = require("prettier");
const fs = require("fs");
const path = require("path");
const ora = require("ora");
const mkdirp = require("mkdirp");
const { SyncHook } = require("tapable");
require("colors");
const question = require("./questions");
const Template = require("./Template");
const contextTransformers = require("./contextTransformers");
const plugins = require("./plugins");

module.exports = class Solti {
  constructor(argv) {
    this.spinner = ora;
    this.args = argv;
    this._hooks = {
      collectTemplateHelpers: new SyncHook(),
      init: new SyncHook()
    };
  }

  init() {
    solti.registerPlugins();
    // this.hooks.collect.
    // Template.registerPartials();
  }
  on(hook, callback) {
    this._hooks[hook].call("plugin", callback);
  }
  static contextTransformers(templateObject) {
    if (contextTransformers[templateObject.code]) {
      return contextTransformers[templateObject.code](templateObject) || {};
    }
    return {};
  }

  createHandlebarsContext(answer, templateObject) {
    const context = {
      isPropTypes: answer.component.isPropTypes,
      componentName: answer.component.name,
      ...Solti.contextTransformers(templateObject)
    };

    if (answer.component.props !== "null") {
      context.props = (context.props || []).concat(
        (answer.component.props || "").split(",").map(prop => ({
          key: prop,
          value: "any.isRequired"
        }))
      );
    }
    if (this.args.withDocs) {
      context.docs = templateObject.description;
    }
    return context;
  }

  registerPlugins() {
    plugins.forEach(item => {
      if (!item.apply) {
        throw new Error("Plugin must implement apply method.");
      }

      item.apply(this);
    });
  }
  start() {
    this._hooks.init.call();
    // question(async (answer, { patterns }) => {
    //   this.spinner = this.spinner("Creating Component, Please wait...".cyan);
    //   try {
    //     const templateObject = patterns.find(
    //       template => answer.component.pattern === template.name
    //     ); // eslint-disable-line
    //     if (!this.args.withDocs) {
    //       console.log(
    //         'You can run "solti --with-docs" to generate component with documentation.'
    //           .green
    //       );
    //     }
    //     this.spinner.start();
    //     /*
    //     * Fetch template and parse it with handlebars
    //     * */
    //     const template = await Template.parse(templateObject.code);
    //     const component = template(
    //       this.createHandlebarsContext(answer, templateObject)
    //     );
    //     const componentName = `${answer.component.name}.js`;
    //     const componentLocation = path.join(
    //       process.cwd(),
    //       answer.component.destination
    //     );
    //     if (!Solti.isDirExist(componentLocation)) {
    //       mkdirp.sync(componentLocation);
    //     }
    //     /*
    //     * Write Generated component to provided location with format
    //     * */
    //     const pathToComponent = path.join(componentLocation, componentName);
    //     fs.writeFileSync(pathToComponent, prettier.format(component));
    //     console.log(
    //       `\n New ${
    //         answer.component.pattern
    //       } <${componentName}> has been created at ${
    //         answer.component.destination
    //       }`.green
    //     );
    //     this.spinner.stop();
    //   } catch (err) {
    //     console.log((err.message || "").red);
    //     this.spinner.stop();
    //     process.exit(0);
    //   }
    // });
  }

  static isDirExist(componentLocation) {
    try {
      return fs.readdirSync(componentLocation);
    } catch (err) {
      return false;
    }
  }
};
