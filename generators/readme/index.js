'use strict';
/* eslint no-empty-function: ["error", { "allow": ["methods"] }] */

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const helper = require('./../../src/helper.js');
const generator = path.basename(__dirname);
const generator_config = require('./config.js');

let config = {};
let answers = {};

module.exports = class extends Generator {
  // initializing - Your initialization methods (checking current project state, getting configs, etc)
  async initializing() {

    // create or update config
    await helper.InitConfig(this, generator_config);

    // get current config
    config = this.config.getAll();
    config.generator_name = generator_config.name || generator;
    config.generator_description = '\n' + generator_config.description || '';
  }

  // prompting - Where you prompt users for options (where you’d call this.prompt())
  async prompting() {
    this.log(
      yosay(
        `${chalk.green(config.generator_name)} ${config.generator_description}`,
      ),
    );

    generator_config.prompts = helper.InterpolatePrompts(this, config, generator_config.prompts);
    answers = await this.prompt(generator_config.prompts);
  }

  // configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  configuring() {}

  // default - If the method name doesn’t match a priority, it will be pushed to this group.
  default() {}

  // writing - Where you write the generator specific files (routes, controllers, etc)
  writing() {

    // merge data
    const data = {
      ...config,
      ...answers,
    };

    this.renderTemplate(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      data,
    );
  }

  // conflicts - Where conflicts are handled (used internally)
  conflicts() { }

  // install - Where installations are run (npm, bower)
  install() {}

  // end - Called last, cleanup, say good bye, etc
  end() {
    helper.End(this, config);
  }
};

