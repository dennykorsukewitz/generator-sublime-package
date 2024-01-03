const path = require('path');
const helpers = require('yeoman-test');

describe('generators:plugin', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      plugin_name: 'HelloWorld',
      command_name: 'HelloWorld',
      command_type: 'ApplicationCommand',
      sublime_settings: false,

      // package_data
      sublime_version: '4.0.x',
      package_name: 'Sublime-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
    };

    const expectedFiles = [
      'HelloWorld.py',
    ];

    const expectedContent = [
      [ 'HelloWorld.py', 'HelloWorld' ],
      [ 'HelloWorld.py', 'ApplicationCommand' ],
      [ 'HelloWorld.py', 'run' ],
      [ 'HelloWorld.py', 'quick_panel_selected' ],
      [ 'HelloWorld.py', 'input_panel_done' ],
    ];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/plugin'))
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
