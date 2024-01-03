const config = {
  name: 'Macro',
  description: 'Creates a Default.sublime-macro file. Macros are a basic automation facility comprising sequences of commands.',
  priority: 60,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'macro_file_name',
      message: 'What is the name of your new macro file (macro file name)?',
      type:    'input',
      default: '${config.package_name_pascal_case}',
    },
  ],
};
module.exports = config;
