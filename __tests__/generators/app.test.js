'use strict';

const path = require('path');
const helpers = require('yeoman-test');

describe('generators:app', () => {
  describe('creates files without existing package', () => {
    let runResult;

    const config = {};
    const expectedFiles = ['.gitignore'];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/app'))
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

  describe('creates files with existing package', () => {
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

    const expectedFiles = ['.gitignore'];

    beforeEach(async () => {
      runResult = await helpers
        .run(path.join(process.env.INIT_CWD, '/generators/app'))
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

