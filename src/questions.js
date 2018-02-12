const inquirer = require('inquirer');
const InquirerConfigBuilder = require('inquirer_config_builder');
const ora = require('ora');
const isDev = require('./utils/isDev');
const plugins = require('../plugins');

const schema = {
  component: {
    pattern: {
      message: 'Please select available component patterns.',
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
    props: {
      message: 'Add props separated by coma or leave blank',
      required: true,
      default: 'null'
    },
    isPropTypes: {
      type: 'confirm',
      required: true,
      message: 'Add Prop Types',
      default: true,
      when(answers) {
        return answers.component.props !== 'null';
      },
    },
    destination: {
      message: 'Enter destination for component relative from current location',
      required: true,
      default: './',
    },
  },
};
module.exports = async (onAnswer = () => null) => {
  try {
    const answer = await inquirer.prompt(InquirerConfigBuilder.questions({
      lib: {
        name: {
          message: 'Please select library/framework',
          type: 'list',
          required: true,
          choices: plugins.map(item => item.label),
        }
      }
    }));
    let libInstance = null;
    plugins.forEach((plugin) => {
      if (plugin.label === answer.lib.name) {
        libInstance = plugin;
      }

    });
    if (isDev) {
      schema.component.destination.default = './example/src/components';
    }
    const spinner = ora('Preparing questions...').start();
    const transformedSchema = await libInstance.getQuestions({ schema });
    const questionReadyObject = InquirerConfigBuilder.questions(transformedSchema);
    spinner.stop();
    inquirer.prompt(questionReadyObject).then((answers) => {
      const configReadyObject = InquirerConfigBuilder.create(answers);
      onAnswer(configReadyObject, {
        schema,
        lib: libInstance,
      });
    });
  } catch (err) {
    console.error(err);
  }
};
