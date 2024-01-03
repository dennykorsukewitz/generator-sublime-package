const config = {
  name: 'Project',
  description: 'Creates a SublimePackage.sublime-project file to register a collection of files and folders, which are shown in Sidebar.',
  priority: 90,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'project_file_name',
      message: 'What is the name of your new project file (project file name)?',
      type:    'input',
      default: '${config.package_name_pascal_case}',
    },
    {
      name:    'project_path',
      message: 'What is the path of your wanted folder?',
      type:    'input',
      default: '${config.package_dir}',
    },
  ],
};
module.exports = config;