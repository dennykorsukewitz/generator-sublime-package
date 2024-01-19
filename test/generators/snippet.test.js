const path = require('path');
const helpers = require('yeoman-test');

describe('generators:snippet', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      snippet_file_name: 'SublimePackage',

      // package_data
      sublime_version: '4.0.x',
      package_name: 'Sublime-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
    };

    const expectedFiles = [
      'snippets/SublimePackage.sublime-snippet',
    ];

    const expectedContent = [
      [ 'snippets/SublimePackage.sublime-snippet', 'snippet' ],
      [ 'snippets/SublimePackage.sublime-snippet', 'content' ],
      [ 'snippets/SublimePackage.sublime-snippet', 'tabTrigger' ],
      [ 'snippets/SublimePackage.sublime-snippet', 'description' ],
      [ 'snippets/SublimePackage.sublime-snippet', 'scope' ],
    ];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/snippet'))
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
