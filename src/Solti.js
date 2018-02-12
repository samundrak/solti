const fs = require("fs");
const path = require("path");
const ora = require("ora");
const mkdirp = require("mkdirp");
require("colors");
const question = require("./questions");
const Template = require("./Template");

module.exports = class Solti {
  constructor(argv) {
    this.spinner = ora;
    this.args = argv;
  }

  start() {
    question(async (answer, { lib }) => {
      this.spinner = this.spinner("Creating Component, Please wait...".cyan);
      try {
        Template.registerPartials(lib.getPartials());
        const templateObject = lib.getPatterns().find(
          template => answer.component.pattern === template.name
        ); // eslint-disable-line
        if (!this.args.withDocs) {
          console.log(
            'You can run "solti --with-docs" to generate component with documentation.'
              .green
          );
        }
        this.spinner.start();

        /*
        * Fetch template and parse it with handlebars
        * */
        const template = await Template.parse({ path: lib.getPathToTemplate(), templateCode: templateObject.code });
        const component = template({
          ...lib.createTemplateContext(answer, templateObject),
          docs: this.args.withDocs && templateObject.description
        });
        const componentName = `${answer.component.name}.js`;
        const componentLocation = path.join(
          process.cwd(),
          answer.component.destination
        );
        if (!Solti.isDirExist(componentLocation)) {
          mkdirp.sync(componentLocation);
        }
        /*
        * Write Generated component to provided location with format
        * */
        const pathToComponent = path.join(componentLocation, componentName);
        fs.writeFileSync(pathToComponent, lib.getFormattedComponent(component));
        console.log(
          `\n New ${
            answer.component.pattern
            } <${componentName}> has been created at ${
            answer.component.destination
            }`.green
        );
        this.spinner.stop();
      } catch (err) {
        console.log((err.message || "").red);
        this.spinner.stop();
        process.exit(0);
      }
    });
  }

  static isDirExist(componentLocation) {
    try {
      return fs.readdirSync(componentLocation);
    } catch (err) {
      return false;
    }
  }
};
