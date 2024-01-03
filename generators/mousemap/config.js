const config = {
  name: 'Mousemap',
  description: 'Creates a Default.sublime-mousemap file, which control what commands are executed when a user performs an action with a mouse.',
  priority: 80,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'mousemap_os',
      message: 'For which operating system do you need a mousemap?',
      type:    'checkbox',
      choices: [
        {
          name:  'Windows',
          value: 'Default (Windows)',
          checked: true,
        },
        {
          name:  'OSX',
          value: 'Default (OSX)',
          checked: true,
        },
        {
          name:  'Linux',
          value: 'Default (Linux)',
          checked: true,
        },
      ],
    },
  ],
};
module.exports = config;