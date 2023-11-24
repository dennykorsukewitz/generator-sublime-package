const config = {
  name: 'Keymap',
  description: 'Creates a Default.sublime-keymap file. Default.sublime-keymap files contain the key bindings (shortcuts) for a command.',
  priority: 4,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'keymap_shortcut',
      message: 'What is the shortcut of your command?',
      type:    'input',
      default: 'ctrl+alt+k',
    },
    {
      name:    'keymap_command',
      message: 'What is the name of your command?',
      type:    'input',
      default: '${config.package_name_pascal_case}',
    },
    {
      name:    'keymap_os',
      message: 'For which operating system do you need a keymap?',
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