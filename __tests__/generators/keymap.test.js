const path = require('path');
const helpers = require('yeoman-test');

describe('generators:keymap', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      keymap_shortcut: 'ctrl+alt+k',
      keymap_command: 'hello_world',
      keymap_os: ['Default (Windows)', 'Default (OSX)', 'Default (Linux)'],

      // package_data
      sublime_version: '4.0.x',
      package_name: 'Sublime-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
    };

    const expectedFiles = [
      'keymaps/Default (Linux).sublime-keymap',
      'keymaps/Default (OSX).sublime-keymap',
      'keymaps/Default (Windows).sublime-keymap',
    ];

    const expectedContent = [
      [ 'keymaps/Default (Linux).sublime-keymap', 'ctrl+alt+k' ],
      [ 'keymaps/Default (OSX).sublime-keymap', 'ctrl+alt+k' ],
      [ 'keymaps/Default (Windows).sublime-keymap', 'ctrl+alt+k' ],
      [ 'keymaps/Default (Linux).sublime-keymap', 'hello_world' ],
      [ 'keymaps/Default (OSX).sublime-keymap', 'hello_world' ],
      [ 'keymaps/Default (Windows).sublime-keymap', 'hello_world' ],
    ];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/keymap'))
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

    it('expected content', () => {
      runResult.assertFileContent(expectedContent);
    });

  });
});
