const path = require('path');
const helpers = require('yeoman-test');

describe('generators:project', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      project_file_name: 'SublimePackage',
      project_path: '/Users/dennykorsukewitz/workspace/sublime-package',

      // package_data
      sublime_version: '4.0.x',
      package_name: 'Sublime-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
    };

    const expectedFiles = [
      'projects/SublimePackage.sublime-project',
    ];

    const expectedContent = [
      [ 'projects/SublimePackage.sublime-project', 'folders' ],
      [ 'projects/SublimePackage.sublime-project', '/Users/dennykorsukewitz/workspace/sublime-package' ],
    ];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/project'))
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
