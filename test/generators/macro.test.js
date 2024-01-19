const path = require('path');
const helpers = require('yeoman-test');

describe('generators:macro', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      macro_file_name: 'SublimePackage',

      // package_data
      sublime_version: '4.0.x',
      package_name: 'Sublime-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
    };

    const expectedFiles = [
      'macros/SublimePackage.sublime-macro',
    ];

    const expectedContent = [
      [ 'macros/SublimePackage.sublime-macro', 'hardeol' ],
    ];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/macro'))
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
