const config = {
  name: 'Sublime-Package-Generator',
  description: '',
  versions: {
    '4.0.x': '',
  },
  prompts: [
    // {
    //   name:    'sublime_version',
    //   message: 'For which sublime version should this package be?',
    //   type:    'list',
    //   choices: '${config.supported_versions}',
    //   default: '4.0.x',
    //   store:   true,
    // },
    {
      name:    'package_name',
      message: 'What is the name of your new Sublime-Package?',
      type:    'input',
      default: '${config.package_name_predicted}',
      store:   true,
    },
    {
      name:    'package_description',
      type:    'input',
      message: 'Description. What does the package contain?',
      default: '**${config.package_name_predicted}** is a Sublime Text package that...',
      store:   true,
    },
    {
      name:    'github_username',
      message: 'What is the GitHub user name of your new Sublime-Package?',
      type:    'input',
      default: '${config.github_username}',
      store:   true,
    },
    {
      name:    'github_fullname',
      message: 'What is your GitHub full name?',
      type:    'input',
      default: '${config.github_fullname}',
      store:   true,
    },
  ],
};
module.exports = config;