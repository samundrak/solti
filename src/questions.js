const inquirer = require('inquirer');
const InquirerConfigBuilder = require('inquirer_config_builder');
const ora = require('ora');
const { getReactComponentPatternsList } = require('./services');
const isDev = require('./utils/isDev');

const schema = {
  component: {
    pattern: {
      message: 'Please select available react component patterns.',
      type: 'list',
      required: true,
      choices: [],
      default: null,
    },
    name: {
      message: 'Enter component name',
      required: true,
      default: `Component${Date.now()}`,
    },
    isPropTypes: {
      type: 'confirm',
      required: true,
      message: 'Add Prop Types',
      default: true,
    },
    destination: {
      message: 'Enter destination for component relative from current location',
      required: true,
      default: './',
    },
  },
};
module.exports = async (onAnswer = () => null) => {
  const spinner = ora('Fetching React component patterns...').start();
  try {
    const patterns = await getReactComponentPatternsList();
    schema.component.pattern.choices = patterns.map(item => item.name);
    schema.component.pattern.default = schema.component.pattern.choices[0]; // eslint-disable-line
    if (isDev) {
      schema.component.destination.default = './example/src/components';
    }
    const questionReadyObject = InquirerConfigBuilder.questions(schema);
    spinner.stop();
    inquirer.prompt(questionReadyObject).then((answers) => {
      const configReadyObject = InquirerConfigBuilder.create(answers);
      onAnswer(configReadyObject, {
        schema,
        patterns,
      });
    });
  } catch (err) {
    spinner.stop();
    throw err;
  }
};
