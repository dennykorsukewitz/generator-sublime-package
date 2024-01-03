const config = {
  name: 'Menu',
  description: 'Creates a *.sublime-menu file. Define Menubar and various right-click menus. Creates a *.sublime-menu file.',
  priority: 70,
  versions: {
    '4.0.x': '',
  },
  prompts: [
    {
      name:    'menu_types',
      message: 'Which menu do you need?',
      type:    'checkbox',
      choices: [
        {
          name:    'Main',
          value:   'Main',
          checked: true,
        },
        {
          name:    'Context',
          value:   'Context',
          checked: false,
        },
        {
          name:    'Encoding',
          value:   'Encoding',
          checked: false,
        },
        {
          name:    'Find in Files',
          value:   'Find in Files',
          checked: false,
        },
        {
          name:    'Indentation',
          value:   'Indentation',
          checked: false,
        },
        {
          name:    'Line Endings',
          value:   'Line Endings',
          checked: false,
        },
        {
          name:    'Side Bar',
          value:   'Side Bar',
          checked: false,
        },
        {
          name:    'Side Bar Mount Point',
          value:   'Side Bar Mount Point',
          checked: false,
        },
        {
          name:    'Syntax',
          value:   'Syntax',
          checked: false,
        },
        {
          name:    'Tab Context',
          value:   'Tab Context',
          checked: false,
        },
        {
          name:    'Widget Context',
          value:   'Widget Context',
          checked: false,
        },
      ],
    },
  ],
};
module.exports = config;