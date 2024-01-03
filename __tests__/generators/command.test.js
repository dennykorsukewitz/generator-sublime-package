const path = require('path');
const helpers = require('yeoman-test');

describe('generators:command', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      command_file_name: 'SublimePackage',
      command_name: 'sublime_package',
      command_caption: 'SublimePackage is the new feature...',

      // package_data
      sublime_version: '4.0.x',
      package_name: 'Sublime-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
    };

    const expectedFiles = ['commands/SublimePackage.sublime-commands'];

    const expectedContent = [
      [ 'commands/SublimePackage.sublime-commands', 'sublime_package' ],
      [ 'commands/SublimePackage.sublime-commands', 'SublimePackage is the new feature...' ],
    ];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/command'))
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
