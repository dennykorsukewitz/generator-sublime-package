# Changelog

All notable changes to the "Sublime-Package" Generator will be documented in this file.

## [1.0.0]

Breaking change: requires **Node.js >= 20.12.0** (aligned with current Yeoman stack and `util.styleText`).

### Changed

- Raise `engines.node` to `>=20.12.0`; run CI and releases on Node 20
- Import `glob` as a named export for compatibility with `glob` v10

### Dependencies

- Bump `eslint` from 9.34.0 to 9.36.0 (#24)
- Bump `chalk` from 5.6.0 to 5.6.2 (#25)
- Bump `yeoman-test` from 10.1.1 to 11.0.0 (#26)
- Bump `jest` from 29.7.0 to 30.2.0 (#27)
- Bump `lint-staged` from 15.2.11 to 16.2.3 (#22, #28)
- Bump `js-yaml` from 3.14.1 to 3.14.2 (#30)
- Bump `lodash-es` from 4.17.21 to 4.17.23 (#34)
- Bump `simple-git` from 3.28.0 to 3.33.0 (#40)
- Bump `yeoman-environment` from 4.4.3 to 6.0.0 and refresh transitive `tar` (#41)
- Bump `minimatch` from 3.1.2 to 3.1.5 (#42)
- Bump `prettier` from 1.19.1 to 3.6.2 (#18)
- Bump `eslint-plugin-prettier` from 3.4.1 to 5.5.4 (#20)
- Bump `eslint-config-prettier` from 6.6.0 to 10.1.8 (#21)
- Add devDependencies `@yeoman/adapter`, `@yeoman/types` for `yeoman-test` 11

## [0.1.0]

Breaking Change: Requires Node.js >=16.0.0 with ES module support

### Changed

- Convert entire codebase from CommonJS to ES modules
- Convert all generator files to ES module syntax (import/export)
- Update all config.js files to use export default
- Configure ESLint for ES modules (eslint.config.js)
- Configure Jest for ES modules with experimental-vm-modules flag
- Fix reserved keyword usage in github.js (package → packageJson)
- Update test and coverage scripts for GitHub Actions compatibility
- Bump version to 0.1.0

### Dependencies

- Bump actions/checkout from 3 to 4 (#3)
- Bump actions/setup-node from 3 to 4 (#2)
- Bump chalk from 2.4.2 to 5.3.0 (#7)
- Bump yeoman-test from 6.3.0 to 10.0.1 (#4)
- Bump eslint from 6.8.0 to 9.16.0 (#5)
- Bump jest from 26.6.3 to 29.7.0 (#6)
- Bump lint-staged from 9.5.0 to 15.2.11 (#8)
- Bump interpolate-json from 2.3.3 to 3.0.0 (#10)
- Bump change-case from 4.1.2 to 5.4.4 (#12)
- Bump yosay from 2.0.2 to 3.0.0 (#13)
- Bump eslint-config-xo from 0.27.2 to 0.48.0 (#16)
- Bump yeoman-generator from 5.10.0 to 7.5.1 (#14)

### Fixed

- Eslint

## [0.0.5]

### Maintenance

Updated README.
Added GIF.
Updated USAGE's. Removed obsolete 'Variables' in app USAGE.

### New

Added additional option `generator-description` to shows the description of each sub-generator.

## [0.0.4]

### Maintenance

Fixed Snippet messages.
Restructured package directories.
Updated README.

### New

Added completion generator.
Added macro generator.
Added mousemap generator.
Added project generator.
Added UnitTests.

## [0.0.3]

### Maintenance

Reduced npm dependencies.
Updated README.

## [0.0.2]

### Maintenance

Added src folder to npm module.
Updated README.md.

## [0.0.1]

### Initial release of Subelime-Package Generator

**Sublime-Package** is a Sublime Text package generator for [yeoman](https://yeoman.io/), which creates scaffold for a sublime-package.

We are all lazy 🦥 and only want to code 👨‍💻 if it is not already exists. \
So i created this yeoman generator to easy get an scaffold for a sublime-package.
