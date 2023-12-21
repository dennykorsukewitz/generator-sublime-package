const path = require('path');
const helpers = require('yeoman-test');

describe('generators:readme', () => {
  describe('creates files', () => {
    let runResult;

    const config = {
      // generator_data
      sublime_version: '4.0.x',
      package_name: 'My-Package',
      package_description: 'My description.',
      github_username: 'dennykorsukewitz',
      github_fullname: 'Denny Korsukéwitz',
      generators: '',
    };

    const expectedFiles = ['README.md'];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/readme'))
        .withPrompts(config)
        .withLocalConfig(config);
    });

    afterEach(() => {
      if (runResult) {
        runResult.restore();
      }
    });

    it('runs correctly', () => {
      runResult.assertFile(expectedFiles);
    });
  });
});
