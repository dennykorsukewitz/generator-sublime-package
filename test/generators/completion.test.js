const path = require('path');
const helpers = require('yeoman-test');

describe('generators:completion', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      completions_file_name: 'SublimePackage',
      completions_contents: 'Hello World!',
      completions_trigger: 'hello_world',
      completions_details: 'Say hello world!',
      completions_annotation: 'Say hello world!',
      completions_scope: 'source.python',
      completions_kind: 'snippet',

      // package_data
      sublime_version: '4.0.x',
      package_name: 'Sublime-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
    };

    const expectedFiles = ['completions/SublimePackage.sublime-completions'];

    const expectedContent = [
      [ 'completions/SublimePackage.sublime-completions', 'Hello World!' ],
      [ 'completions/SublimePackage.sublime-completions', 'hello_world' ],
      [ 'completions/SublimePackage.sublime-completions', 'Say hello world!' ],
      [ 'completions/SublimePackage.sublime-completions', 'source.python' ],
      [ 'completions/SublimePackage.sublime-completions', 'snippet' ],
    ];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/completion'))
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
