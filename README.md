<img align="right" width="140" height="70" src="doc/images/Yeoman_Logo.png">

# Sublime-Package

**Sublime-Package** is a [Yeoman](https://yeoman.io/) **GENERATOR**, which creates scaffolding for a Sublime-Packages.

We are all lazy 🦥 and only want to code 👨‍💻 if it doesn't already exist. \
So I created this yeoman generator to easily get a Scaffolding for a Sublime package.

| Repository | GitHub | Npm |
| ------ | ------ | ------ |
| ![GitHub release (latest by date)](https://img.shields.io/github/v/release/dennykorsukewitz/generator-sublime-package) | ![GitHub open issues](https://img.shields.io/github/issues/dennykorsukewitz/generator-sublime-package) ![GitHub closed issues](https://img.shields.io/github/issues-closed/dennykorsukewitz/generator-sublime-package?color=#44CC44) | ![npm version](https://img.shields.io/npm/v/generator-sublime-package) |
| ![GitHub license](https://img.shields.io/github/license/dennykorsukewitz/generator-sublime-package) | ![GitHub pull requests](https://img.shields.io/github/issues-pr/dennykorsukewitz/generator-sublime-package?label=PR) ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/dennykorsukewitz/generator-sublime-package?color=g&label=PR) | ![npm collaborators](https://img.shields.io/npm/collaborators/generator-sublime-package) |
| ![GitHub language count](https://img.shields.io/github/languages/count/dennykorsukewitz/generator-sublime-package?style=flat&label=language)  | ![GitHub contributors](https://img.shields.io/github/contributors/dennykorsukewitz/generator-sublime-package) | ![npm](https://img.shields.io/npm/dt/generator-sublime-package) ![npm](https://img.shields.io/npm/dy/generator-sublime-package) |
| ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dennykorsukewitz/generator-sublime-package) | ![GitHub downloads](https://img.shields.io/github/downloads/dennykorsukewitz/generator-sublime-package/total?style=flat) | ![npm](https://img.shields.io/npm/dm/generator-sublime-package)  ![npm](https://img.shields.io/npm/dw/generator-sublime-package)  |

| Status |
| ------ |
| [![GitHub commits since tagged version](https://img.shields.io/github/commits-since/dennykorsukewitz/generator-sublime-package/0.0.5/dev)](https://github.com/dennykorsukewitz/generator-sublime-package/compare/0.0.5...dev) ![GitHub Workflow Lint](https://github.com/dennykorsukewitz/generator-sublime-package/actions/workflows/lint.yml/badge.svg?branch=dev&style=flat&label=Lint) ![GitHub Workflow UnitTest](https://github.com/dennykorsukewitz/generator-sublime-package/actions/workflows/unittest.yml/badge.svg?branch=dev&style=flat&label=UnitTest) ![GitHub Workflow Pages](https://github.com/dennykorsukewitz/generator-sublime-package/actions/workflows/pages.yml/badge.svg?branch=dev&style=flat&label=GitHub%20Pages) |

![sublime-package](doc/images/sublime-package.gif)

---

## Feature

The following files can be created.

| Generator   | Files                           | Function |
|:------------|:--------------------------------|:--------------|
| **app**         | .gitattributes                              | A gitattributes file is a simple text file that gives attributes to pathnames. |
|                 | .gitignore                                  | A gitignore file specifies intentionally untracked files that Git should ignore. |
|                 | messages/changelog.txt                      | All notable changes to your new package will be documented in this file. |
|                 | messages/install.txt                        | When a package is installed, if the key install is present in the messages.json file, the value will be used as the file path to a txt file containing a message to display the user. |
|                 | messages/version.txt                        | When a package is upgraded, Package Control looks through each key in the messages.json file sand shows the content of the text file that is a value of any key that is higher than the previous version of the package the user has installed. |
|                 | messages.json                               | Messaging is controlled by a file named messages.json in the root of the package. |
| **command**     | commands/SublimePackage.sublime-commands    | SublimePackage.sublime-commands is a file to register your new command / plugin for the Command Palette. |
| **completion**  | completions/SublimePackage.sublime-completions | SublimePackage.sublime-commands is a file to register your new command / plugin for the Command Palette. |
| **keymap**      | keymaps/Default.sublime-keymap              | Creates a Default.sublime-keymap file. Default.sublime-keymap files contain the key bindings (shortcuts) for a command. The JSON objects must contain a keys and command key, and may also contain a args key if the command requires arguments. |
|                 | keymaps/Default (Linux).sublime-keymap      | Shortcuts for Linux |
|                 | keymaps/Default (OSX).sublime-keymap        | Shortcuts for OSX |
|                 | keymaps/Default (Windows).sublime-keymap    | Shortcuts for Windows |
| **macro**       | macros/SublimePackage.sublime-macro.        | Macros are a basic automation facility comprising sequences of commands. Use them whenever you need to repeat the exact same steps to perform an operation. |
| **menu**        | menus/Context.sublime-menu                  | Right click on main buffer. |
|                 | menus/Encoding.sublime-menu                 | Left click on "Encoding" section in statusbar. |
|                 | menus/Find in Files.sublime-menu            | Left click on "..." button on Where field of Find_in_files. |
|                 | menus/Indentation.sublime-menu              | Left click on "Indentation" section in statusbar. |
|                 | menus/Line Endings.sublime-menu             | Left click on "Line Ending" section in statusbar. |
|                 | menus/Main.sublime-menu                     | Main Menu bar. |
|                 | menus/Side Bar.sublime-menu                 | Right click on items in Sidebar. |
|                 | menus/Syntax.sublime-menu                   | Left click on current syntax section in statusbar e.g. 'Plain Text'. |
|                 | menus/Side Bar Mount Point.sublime-menu     | Right click on main folders in Sidebar. |
|                 | menus/Tab Context.sublime-menu              | Right click on Tab bar. |
|                 | menus/Widget Context.sublime-menu           | Right click on text field of any widget (i.e: search panel or output panel). |
| **mousemap**      | mousemaps/Default.sublime-mousemap        | Creates a Default.sublime-mousemap file. The mousemap files (which have the extension .sublime-mousemap) control what commands are executed when a user performs an action with a mouse, e.g. clicking a mouse button, scrolling the scroll wheel, etc. |
|                 | mousemaps/Default (Linux).sublime-mousemap  | Shortcuts for Linux |
|                 | mousemaps/Default (OSX).sublime-mousemap    | Shortcuts for OSX |
|                 | mousemaps/Default (Windows).sublime-mousemap| Shortcuts for Windows |
| **plugin**      | SublimePackage.py                           | Creates a new python plugin. |
|                 | SublimePackage.sublime-settings             | Creates a SublimePackage.sublime-settings file to stores configuration data. |
| **project**     | projects/SublimePackage.sublime-projects       | Creates a SublimePackage.sublime-project file to register a collection of files and folders, which are shown in Sidebar. |
| **readme**      | README.md                                   | A README is often the first item a visitor will see when visiting your repository.|
| **setting**     | settings/SublimePackage.sublime-settings    | Creates a SublimePackage.sublime-settings file to stores configuration data. |
| **snippet**     | snippets/SublimePackage.sublime-snippet     | Snippets are smart templates that will insert text for you, adapting it to their context. |

---

## Usage

```bash
# Create a new directory
mkdir sublime-package && cd $_

# Let the magic happen
yo sublime-package

# Show all possible generators
yo sublime-package --generators

# Shows the description of each sub-generator
yo sublime-package --generator-description

# Run subgenerators directly
yo sublime-package:SUBGENERATOR

# Print the generator's options and usage
yo sublime-package:SUBGENERATOR --help

yo sublime-package:command
yo sublime-package:completion
yo sublime-package:keymap
yo sublime-package:macro
yo sublime-package:menu
yo sublime-package:mousemap
yo sublime-package:plugin
yo sublime-package:project
yo sublime-package:readme
yo sublime-package:setting
yo sublime-package:snippet
```

---

## Dependencies

### Node.js

`generator-sublime-package` uses Node.js as runtime environment.

[![Node.js](https://img.shields.io/badge/nodejs-16.13.0-blue.svg?logo=github)](https://github.com/nodejs/node)

Install [Node](https://nodejs.org/en/download/)

### Yeoman

`generator-sublime-package` uses the yeoman module to create that epic scaffolding.

Install [Yeoman](http://yeoman.io)

```bash
# Install yeoman global
npm install -g yo
```

---

## Installation

### 1. Npm

```bash
# Install generator-sublime-package via npm
npm install -g generator-sublime-package
```

### 2. Source code

Clone the latest [dev branch](https://github.com/dennykorsukewitz/generator-sublime-package)

```bash
# Clone repository
git clone git@github.com:dennykorsukewitz/generator-sublime-package.git
cd generator-sublime-package
```

Check all node dependencies in package.json

```bash
# Run npm install to add all dependencies.
npm install
```

Run this link command in generator-sublime-package directory to link this generator to yeoman.

```bash
# Link local generator
npm link ./
```

---

## Development

### Dependencies

```bash
# Install yeoman-test and yeoman-assert for jest tests
npm install -g yeoman-test
npm install -g yeoman-assert

# Install eslint and ejs-lint for linting
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

## Alternatives

The following generators can also help.

**But**, they do not have the accumulated power.

- [generator-sublime](https://www.npmjs.com/package/generator-sublime)
- [generator-sublime-project](https://www.npmjs.com/package/generator-sublime-project)
- [generator-sublime-snippets](https://www.npmjs.com/package/generator-sublime-snippets)
- [generator-st](https://www.npmjs.com/package/generator-st)

---

Enjoy!

Your [Denny Korsukéwitz](https://github.com/dennykorsukewitz) 🚀
