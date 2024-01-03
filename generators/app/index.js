'use strict';
/* eslint no-empty-function: ["error", { "allow": ["methods"] }] */

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const helper = require('./../../src/helper.js');
const generator_config = require('./config.js');

let config = {};
let answers = {};
const prompts = [];

module.exports = class extends Generator {

  // Arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);

    // This method adds support for a `--generator-description` flag
    this.option('generator-description', {
      type: Boolean,
      description: 'Shows the description of each sub-generator.',
      default: false,
      alias: 'd',
      hide: false,
    });

  }

  // initializing - Your initialization methods (checking current project state, getting configs, etc)
  async initializing() {

    // create or update config
    await helper.InitConfig(this, generator_config);

    // get current config
    config = this.config.getAll();

    // says hello
    helper.SayStart(this, config);

    generator_config.prompts = helper.InterpolatePrompts(this, config, generator_config.prompts);

    // add only not answered prompt's (questions) to array prompts
    generator_config.prompts.forEach(prompt => {
      if (!config[prompt.name]) {

        // if add supported sublime_version 's
        if (prompt.name == 'sublime_version') {
          prompt.choices = config.supported_versions;
        }
        prompts.push(prompt);
      }
    });
  }

  // prompting - Where you prompt users for options (where you’d call this.prompt())
  async prompting() {

    if (prompts.length) {
      this.log(
        yosay(
          'I need to ask you a few more general questions about the package.',
        ),
      );
      answers = await this.prompt(prompts);
    }

    config.generators = [];
    config.sublime_version = config.sublime_version || answers.sublime_version || '4.0.x';

    if (!config.generators.length && config.sublime_version && config.generators_by_versions) {
      config.generators = helper.GetAvailableGenerators(this, config);
    }

    if (!config.generators || !config.generators.length) {
      this.log(
        yosay(
          `${chalk.red('I have not found any or new generators for this version:')} ${chalk.green(config.sublime_version)}`,
        ),
      );
      return;
    }

    const default_prompts = [
      {
        name: 'generators',
        type: 'checkbox',
        message: 'What kind of features do you need?',
        choices: config.generators,
      },
    ];

    const generator_answers = await this.prompt(default_prompts);
    if (generator_answers) {
      answers = {
        ...answers,
        ...generator_answers,
      };
    }
  }

  // configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  configuring() {

    for (const key in answers) {
      config[key] = answers[key];
      this.config.set(key, answers[key]);
    }

    this.config.save();
  }

  // default - If the method name doesn’t match a priority, it will be pushed to this group.
  default() {}

  // writing - Where you write the generator specific files (routes, controllers, etc)
  async writing() {

    // .gitignore
    if (!this.existsDestination('.gitignore')) {
      this.renderTemplate(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore'),
      );
    }

    // .gitattributes
    if (!this.existsDestination('.gitattributes')) {
      this.renderTemplate(
        this.templatePath('.gitattributes'),
        this.destinationPath('.gitattributes'),
      );
    }

    // messages.json
    if (!this.existsDestination('messages.json')) {
      this.renderTemplate(
        this.templatePath('messages.json'),
        this.destinationPath('messages.json'),
      );
    }

    // changelog.txt
    if (!this.existsDestination('messages/changelog.txt')) {
      this.renderTemplate(
        this.templatePath('changelog.txt'),
        this.destinationPath('messages/changelog.txt'),
      );
    }

    // install.txt
    if (!this.existsDestination('messages/install.txt')) {
      this.renderTemplate(
        this.templatePath('install.txt'),
        this.destinationPath('messages/install.txt'),
      );
    }

    // version.txt
    if (!this.existsDestination('messages/version.txt')) {
      this.renderTemplate(
        this.templatePath('version.txt'),
        this.destinationPath('messages/version.txt'),
      );
    }

    // call every needed generator
    if (answers.generators) {
      await answers.generators.forEach(generator => {
        this.composeWith('sublime-package:' + generator);
      });
    }
  }

  // conflicts - Where conflicts are handled (used internally)
  conflicts() {}

  // install - Where installations are run (npm, bower)
  install() {}

  // end - Called last, cleanup, say good bye, etc
  end() {

    helper.End(this, config);

    this.log(
      yosay(
        `Okay, there we go. \nI am taking a break now...\n\n ☕️${chalk.hex('#6F4E37')('Coffee Time')} ☕️\n`,
      ),
    );
  }
};

