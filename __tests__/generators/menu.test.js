const path = require('path');
const helpers = require('yeoman-test');

describe('generators:menu', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      menu_types: [
        'Main',
        'Context',
        'Encoding',
        'Find in Files',
        'Indentation',
        'Line Endings',
        'Side Bar',
        'Side Bar Mount Point',
        'Syntax',
        'Tab Context',
        'Widget Context',
      ],

      // package_data
      sublime_version: '4.0.x',
      package_name: 'Sublime-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
    };

    const expectedFiles = [
      'menus/Context.sublime-menu',
      'menus/Encoding.sublime-menu',
      'menus/Find in Files.sublime-menu',
      'menus/Indentation.sublime-menu',
      'menus/Line Endings.sublime-menu',
      'menus/Main.sublime-menu',
      'menus/Side Bar.sublime-menu',
      'menus/Syntax.sublime-menu',
      'menus/Side Bar Mount Point.sublime-menu',
      'menus/Tab Context.sublime-menu',
      'menus/Widget Context.sublime-menu',
    ];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/menu'))
        .withPrompts(config)
        .withLocalConfig(config);
    });

    afterEach(() => {
      if (runResult) {
        runResult.restore();
      }
    });

    it('expected files', () => {
      runResult.assertFile(expectedFiles);
    });

  });
});
