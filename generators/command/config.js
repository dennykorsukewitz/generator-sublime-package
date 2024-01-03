const config = {
  name: 'Command',
  description: 'Creates a SublimePackage.sublime-commands file to register your new command / plugin for the Command Palette.',
  priority: 30,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'command_file_name',
      message: 'What is the name of your new command file (command file name)?',
      type:    'input',
      default: '${config.package_name_pascal_case}',
    },
    {
      name:    'command_name',
      message: 'What is the name of your new command (plugin name)?',
      type:    'input',
      default: '${config.package_name_snake_case}',
    },
    {
      name:    'command_caption',
      message: 'What is the caption of your new command (description)?',
      type:    'input',
      default: '${config.package_name_pascal_case} is the new feature...',
    },
  ],
};
module.exports = config;