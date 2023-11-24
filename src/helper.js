'use strict';

const shell = require('shelljs');
const user = require('yeoman-generator/lib/actions/user');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob');
const changeCase = require('change-case');

const { interpolation } = require('interpolate-json');

async function InitConfig(Generator, GeneratorConfig) {

  let config = Generator.config.getAll();
  config.generator = Generator._namespace;
  config.generator_config = GeneratorConfig;

  // package directory name of current package
  config.package_dir = Generator.destinationRoot();

  config.file_list = await GetFileList(Generator, config);

  config = SetTempPath(Generator, config);
  config = SetPackageName(Generator, config);

  // get all possible versions
  config = await GetsupportedVersions(Generator, config);

  // get only needed / available generators
  if (!config.generators && config.sublime_version) {
    config.generators = GetAvailableGenerators(Generator, config);
  }

  config = await GetGitConfig(Generator, config);

  // store config to .yo-rc.json
  for (const key in config) {
    Generator.config.set(key, config[key]);
  }

  Generator.config.save();
}

async function GetGitConfig(Generator, config) {

  config.github_fullname = user.git.name();

  if (shell.which('git')) {
    config.github_username = shell
      .exec('git config --get github.user', { silent: true })
      .stdout.trim();
  }

  return config;
}

async function GetsupportedVersions(Generator, config) {

  const files = await glob.sync(__dirname + '/../generators/**/config.js');

  const generators_by_versions = {};

  files.forEach(file => {
    let pattern = /(app)/i;
    let result = file.match(pattern);
    if (result) {
      return;
    }

    pattern = /generators\/(.*)\/config.js/i;
    result = file.match(pattern);

    const generator = result[1];
    const generator_config = require(file);

    Object.keys(generator_config.versions).forEach(version => {

      if (!generators_by_versions[version]) {
        generators_by_versions[version] = [];
      }

      const generator_name = generator_config.name || changeCase.capitalCase(generator);

      const generator_data = {
        name:        generator_name + ' \t - ' + generator_config.description,
        description: generator_config.description,
        value:       generator,
        checked:     false,
        priority:    generator_config.priority || 50,
      };

      if (generator_config.required_generator) {
        generator_data.required_generator = generator_config.required_generator;
      }

      generators_by_versions[version].push(generator_data);
    });
  });

  const versions = Object.keys(generators_by_versions);

  config.supported_versions = versions;
  config.generators_by_versions = generators_by_versions;

  return config;

}

async function GetFileList(Generator, config, ignore_files) {

  const files = await glob.sync(
    `${config.package_dir}{/**/*.*,/**/.**}`,
    {
      ignore: ignore_files,
    });
  const file_list = files.map(elem => elem.replace(config.package_dir + '/', ''));

  return file_list;
}

function GetAvailableGenerators(Generator, config) {

  let generators = config.generators_by_versions[config.sublime_version];

  // skip README generator if file already exists
  if (config && config.file_list && config.file_list.includes('README.md')) {
    generators = generators.filter(function(generator_data) {
      return generator_data.value != 'readme';
    });
  }

  generators.sort((a, b) => (a.priority > b.priority) ? 1 : -1);

  return generators;
}

function SetTempPath(Generator, config) {

  // temporary path for current cache
  config.temp_path = '__DELETEME__/';
  Generator.config.set('temp_path', config.temp_path);
  return config;
}

function InterpolatePrompts(Generator, config, prompts, answers) {

  const interpolatePrompts = [];
  prompts.forEach(prompt => {

    // add config to prompt as possible data resource
    prompt['config'] = config;
    prompt['answers'] = answers;

    // interpolate prompt
    const interpolatePrompt = interpolation.expand(prompt);

    // remove obsolete config data
    delete interpolatePrompt['config'];
    delete interpolatePrompt['answers'];
    interpolatePrompts.push(interpolatePrompt);
  });

  return interpolatePrompts;
}

function SetPackageName(Generator, config) {

  if (config && config.package_dir) {

    const name = config.package_dir.split(/[\\/]/).pop();

    const package_name_split = name.split('-');

    if (package_name_split.length == 2) {
      config.package_prefix = package_name_split.shift();
      config.package_suffix = package_name_split.pop();
      config.package_seperator = '-';
    }

    if (config && config.package_prefix && config.package_seperator && config.package_suffix) {
      // config.package_name = config.package_prefix + config.package_seperator + config.package_suffix;
      config.package_name_predicted = config.package_prefix + config.package_seperator + config.package_suffix;
    }
    else {
      config.package_name_predicted = name;
    }

    if (config && config.package_name) {

      config.package_name_pascal_case = changeCase.pascalCase(config.package_name);
      config.package_name_snake_case = changeCase.snakeCase(config.package_name);
    }

    Generator.config.set('package_name_predicted', config.package_name_predicted);
  }

  return config;
}

function SayStart(Generator, config) {

  Generator.log(chalk.hex('#FFA500')(`
   _____       _     _ _
  / ____|     | |   | (_)
 | (___  _   _| |__ | |_ _ __ ___   ___
  \\___ \\| | | | '_ \\| | | '_ \` _ \\ / _ \\
  ____) | |_| | |_) | | | | | | | |  __/
 |_____/ \\__,_|_.__/|_|_|_| |_| |_|\\___|
`));

  let package_information = '';

  if (config && config.package_name && config.sublime_version) {
    package_information = `\nName: ${config.package_name}\nSublime: ${config.sublime_version}`;
  }
  if (config && config.package_version) {
    package_information += `\nVersion: ${config.package_version}`;
  }

  // Have Yeoman greet the user.
  Generator.log(
    yosay(
      `Welcome to the ${chalk.green('Sublime-PackageGenerator')}
      ${package_information}`,
    ),
  );
}

function Cleanup(Generator) {

  const delete_items = [
    'temp_path',
    'generator',
    'generator_config',
    'supported_versions',
    'generators_by_versions',
    'generators',
    'temp_path',
    'package_name_predicted',
  ];

  // delete config to .yo-rc.json
  for (const key in delete_items) {
    Generator.config.delete(delete_items[key]);
  }
  Generator.config.save();

  return;
}

function End(Generator) {

  // Cleanup all obsolete files or data
  Cleanup(Generator);

  return;
}

module.exports = {
  Cleanup,
  End,
  GetAvailableGenerators,
  InitConfig,
  InterpolatePrompts,
  SayStart,
  SetPackageName,
  SetTempPath,
};
