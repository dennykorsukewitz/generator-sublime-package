<img align="right" width="140" height="70" src="doc/images/Yeoman_Logo.png">

# Sublime-Package

**Sublime-Package** is a [Yeoman](https://yeoman.io/) **GENERATOR** for Sublime Text, which creates scaffold for a Sublime-Package.

We are all lazy 🦥 and only want to code 👨‍💻 if it doesn't already exist. \
So I created this yeoman generator to easily get a Scaffolding for a Sublime package.

| Repository | GitHub | Npm |
| ------ | ------ | ------ |
| ![GitHub release (latest by date)](https://img.shields.io/github/v/release/dennykorsukewitz/generator-sublime-package) | ![GitHub open issues](https://img.shields.io/github/issues/dennykorsukewitz/generator-sublime-package) ![GitHub closed issues](https://img.shields.io/github/issues-closed/dennykorsukewitz/generator-sublime-package?color=#44CC44) | ![npm version](https://img.shields.io/npm/v/generator-sublime-package) |
| ![GitHub license](https://img.shields.io/github/license/dennykorsukewitz/generator-sublime-package) | ![GitHub pull requests](https://img.shields.io/github/issues-pr/dennykorsukewitz/generator-sublime-package?label=PR) ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/dennykorsukewitz/generator-sublime-package?color=g&label=PR) | ![npm bundle size](https://img.shields.io/bundlephobia/min/generator-sublime-package) ![npm collaborators](https://img.shields.io/npm/collaborators/generator-sublime-package) |
| ![GitHub language count](https://img.shields.io/github/languages/count/dennykorsukewitz/generator-sublime-package?style=flat&label=language)  | ![GitHub contributors](https://img.shields.io/github/contributors/dennykorsukewitz/generator-sublime-package) | ![npm](https://img.shields.io/npm/dy/generator-sublime-package) ![npm](https://img.shields.io/npm/dm/generator-sublime-package)  |
| ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dennykorsukewitz/generator-sublime-package) | ![GitHub downloads](https://img.shields.io/github/downloads/dennykorsukewitz/generator-sublime-package/total?style=flat) | ![npm](https://img.shields.io/npm/dw/generator-sublime-package) ![npm](https://img.shields.io/npm/dt/generator-sublime-package) |

| Status |
| ------ |
| [![GitHub commits since tagged version](https://img.shields.io/github/commits-since/dennykorsukewitz/generator-sublime-package/0.0.1/dev)](https://github.com/dennykorsukewitz/generator-sublime-package/compare/0.0.1...dev) ![GitHub Workflow Lint](https://github.com/dennykorsukewitz/generator-sublime-package/actions/workflows/lint.yml/badge.svg?branch=dev&style=flat&label=Lint) ![GitHub Workflow UnitTest](https://github.com/dennykorsukewitz/generator-sublime-package/actions/workflows/unittest.yml/badge.svg?branch=dev&style=flat&label=UnitTest) ![GitHub Workflow Pages](https://github.com/dennykorsukewitz/generator-sublime-package/actions/workflows/pages.yml/badge.svg?branch=dev&style=flat&label=GitHub%20Pages) |

---

## Feature

The following files can be created.

| Generator   | Files                           | Function |
|:------------|:--------------------------------|:--------------|
| **app**         | .gitattributes                  | A gitattributes file is a simple text file that gives attributes to pathnames. |
|                 | .gitignore                      | A gitignore file specifies intentionally untracked files that Git should ignore. |
|                 | messages/changelog.txt          | All notable changes to your new package will be documented in this file. |
|                 | messages/install.txt            | When a package is installed, if the key install is present in the messages.json file, the value will be used as the file path to a txt file containing a message to display the user. |
|                 | messages/version.txt            | When a package is upgraded, Package Control looks through each key in the messages.json file sand shows the content of the text file that is a value of any key that is higher than the previous version of the package the user has installed. |
|                 | messages.json                   | Messaging is controlled by a file named messages.json in the root of the package. |
| **commands**    | SublimePackage.sublime-commands | SublimePackage.sublime-commands is a file to register your new command / plugin for the Command Palette. |
| **keymap**      | Default.sublime-keymap                            | Creates a Default.sublime-keymap file. Default.sublime-keymap files contain the key bindings (shortcuts) for a command. The JSON objects must contain a keys and command key, and may also contain a args key if the command requires arguments. |
|                 | Default (Linux).sublime-keymap   | Shortcuts for Linux |
|                 | Default (OSX).sublime-keymap     | Shortcuts for OSX |
|                 | Default (Windows).sublime-keymap | Shortcuts for Windows |
| **menu**        | Context.sublime-menu             | Right click on main buffer. |
|                 | Encoding.sublime-menu            | Left click on "Encoding" section in statusbar. |
|                 | Find in Files.sublime-menu       | Left click on "..." button on Where field of Find_in_files. |
|                 | Indentation.sublime-menu         | Left click on "Indentation" section in statusbar. |
|                 | Line Endings.sublime-menu        | Left click on "Line Ending" section in statusbar. |
|                 | Main.sublime-menu                | Main Menu bar. |
|                 | Side Bar.sublime-menu            | Right click on items in Sidebar. |
|                 | Syntax.sublime-menu              | Left click on current syntax section in statusbar e.g. 'Plain Text'. |
|                 | Side Bar Mount Point.sublime-menu| Right click on main folders in Sidebar. |
|                 | Tab Context.sublime-menu         | Right click on Tab bar. |
|                 | Widget Context.sublime-menu      | Right click on text field of any widget (i.e: search panel or output panel). |
| **plugin**      | SublimePackage.py               | Creates a new python plugin. |
|                 | SublimePackage.sublime-settings | Creates a SublimePackage.sublime-settings file to stores configuration data. |
| **readme**      | README.md                       | A README is often the first item a visitor will see when visiting your repository.|
| **settings**    | SublimePackage.sublime-settings | Creates a SublimePackage.sublime-settings file to stores configuration data. |
| **snippets**    | snipptes/SublimePackage.sublime-snippet | Snippets are smart templates that will insert text for you, adapting it to their context. |

---

## Usage

```bash
# let the magic happen
yo sublime-package

# show all possible generators
yo sublime-package --generators

# run subgenerators directly
yo sublime-package:SUBGENERATOR
yo sublime-package:readme
```

---

## Dependencies

### Node.js

`generator-sublime-package` uses Node.js as runtime environment.

[![Node.js](https://img.shields.io/badge/nodejs-16.13.0-blue.svg?logo=github)](https://github.com/nodejs/node)

Install [Node](https://nodejs.org/en/download/)

```bash
# install node js via brew (if exists)
brew install node
```

### Yeoman

`generator-sublime-package` uses the yeoman module to create that epic scaffold.

Install [Yeoman](http://yeoman.io)

```bash
# install yeoman global
npm install -g yo
```

---

## Installation

### 1. Npm

```bash
# install generator-sublime-package via npm
npm install -g generator-sublime-package
```

### 2. Source code

Clone the latest [dev branch](https://github.com/dennykorsukewitz/generator-sublime-package)

```bash
# clone repository
git clone git@github.com:dennykorsukewitz/generator-sublime-package.git
cd generator-sublime-package
```

Check all node dependencies in package.json

```bash
# run npm install to add all dependencies.
npm install
```

Run this link command in generator-sublime-package directory to link this generator to yeoman.

```bash
# link local generator
npm link ./
```

---

## Development

### Dependencies

```bash
# install yeoman-test and yeoman-assert for jest tests
npm install -g yeoman-test
npm install -g yeoman-assert

# install eslint and ejs-lint for linting
npm install -g eslint
npm install -g ejs-lint
```

### Commands

```bash
npm run lint        # lint all JS files
npm run lint-fix    # lint and fix all JS files
npm run test        # start jest (tests)
npm run coverage    # start jest (tests) with coverage
```

---

## Download

For download see [generator-sublime-package](https://github.com/dennykorsukewitz/generator-sublime-package/releases)

---

Enjoy!

Your [Denny Korsukéwitz](https://github.com/dennykorsukewitz) 🚀
