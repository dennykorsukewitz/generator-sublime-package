const config = {
  name: 'Plugin',
  description: 'Creates a new SublimePackage.py file to build your own feature.',
  priority: 20,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'plugin_name',
      message: 'What is the name of your new plugin (python file name)?',
      type:    'input',
      default: '${config.package_name_pascal_case}',
    },
    {
      name:    'command_name',
      message: 'What is the name of your new command?',
      type:    'input',
      default: '${config.package_name_pascal_case}',
    },
    {
      name:    'command_type',
      message: 'Which command type do you need?',
      type:    'list',
      choices: [
        {
          name:  'TextCommand         - provide access to the contents of the selected file/buffer via a View object.',
          value: 'TextCommand',
        },
        {
          name:  'WindowCommand       - provide references to the current window via a Window object.',
          value: 'WindowCommand',
        },
        {
          name:  'ApplicationCommand  - do not have a reference to any specific window or file/buffer and are more rarely used.',
          value: 'ApplicationCommand',
        },
      ],
    },
    {
      name:    'sublime_settings',
      message: 'Do you need a settings file?',
      type:    'confirm',
      default: false,
    },
  ],
};
module.exports = config;