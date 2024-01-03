const path = require('path');
const helpers = require('yeoman-test');

describe('generators:mousemap', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      mousemap_os: ['Default (Windows)', 'Default (OSX)', 'Default (Linux)'],

      // package_data
      sublime_version: '4.0.x',
      package_name: 'Sublime-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
    };

    const expectedFiles = [
      'mousemaps/Default (Linux).sublime-mousemap',
      'mousemaps/Default (OSX).sublime-mousemap',
      'mousemaps/Default (Windows).sublime-mousemap',
    ];

    const expectedContent = [
      [ 'mousemaps/Default (Linux).sublime-mousemap', 'drag_select' ],
      [ 'mousemaps/Default (OSX).sublime-mousemap', 'drag_select' ],
      [ 'mousemaps/Default (Windows).sublime-mousemap', 'drag_select' ],
    ];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/mousemap'))
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
