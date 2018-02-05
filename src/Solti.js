const prettier = require("prettier");
const fs = require("fs");
const path = require("path");
const util = require("util");
const ora = require("ora");
const mkdirp = require("mkdirp");
const colors = require("colors");
const question = require("./questions");
const Template = require("./Template");

module.exports = class Solti {
  constructor() {
    Template.registerPartials();
    this.spinner = ora;
  }
  start() {
    question(async (answer, { patterns }) => {
      this.spinner = this.spinner("Creating Component, Please wait...".cyan);
      try {
        this.spinner.start();
        const templateObject = patterns.find(
          template => answer.component.pattern === template.name
        );
        const template = await Template.parse("hoc");
        const component = template({
          isPropTypes: answer.component.isPropTypes,
          componentName: answer.component.name
        });
        const componentName = `${answer.component.name}.js`;
        const componentLocation = path.join(
          process.cwd(),
          answer.component.destination
        );
        if (!Solti.isDirExist()) {
          mkdirp.sync(componentLocation);
        }
        const pathToComponent = path.join(componentLocation, componentName);

        fs.writeFileSync(pathToComponent, prettier.format(component));
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
  static isDirExist() {
    try {
      return fs.readdirSync(componentLocation);
    } catch (err) {
      return false;
    }
  }
};
