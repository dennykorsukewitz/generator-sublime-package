const config = {
  name: 'Setting',
  description: 'Creates a SublimePackage.sublime-settings file to stores configuration data.',
  priority: 100,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'setting_file_name',
      message: 'What is the name of your new setting file (setting file name)?',
      type:    'input',
      default: '${config.package_name_pascal_case}',
    },
  ],
};
module.exports = config;