# <%= package_name %>

<%= package_description %>

## Feature

...

---

## Usage

...

---

## Settings

...

---

## Installation

To install this package, you have **three** options:

### 1. Search Package via `Package Control`

Search and install online package via [Sublime Package Control](http://wbond.net/sublime_packages/package_control).

`Tools` -> `Command Palette` -> `Package Control: Install Package` -> simply search for `<%= package_name %>` to install.

### 2. Install via sublime-package file

Download latest [sublime-package file](https://github.com/<%= github_username %>/<%= package_name %>/releases) and move the package `<%= package_name %>.sublime-package` to `Installed Packages` folder.

#### OSX

```bash
cd ~/Library/Application\ Support/Sublime\ Text\ 2/Installed Packages/
- or ST 3 -
cd ~/Library/Application\ Support/Sublime\ Text\ 3/Installed Packages/
```

#### Linux

```bash
cd ~/.config/sublime-text-2/Installed Packages
- or ST 3 -
cd ~/.config/sublime-text-3/Installed Packages
```

#### Windows

```bash
cd "%APPDATA%\Sublime Text 2\Installed Packages"
- or ST 3 -
cd "%APPDATA%\Sublime Text 3\Installed Packages"
```

### 3. Source code

Clone the latest [dev branch](https://github.com/<%= github_username %>/<%= package_name %>) and unpack it to Sublime Package folder `Packages`.

#### OSX

```bash
cd ~/Library/Application\ Support/Sublime\ Text\ 2/Packages/
- or ST 3 -
cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/
git clone git@github.com:<%= github_username %>/<%= package_name %>.git <%= package_name %>
```

#### Linux

```bash
cd ~/.config/sublime-text-2/Packages
- or ST 3 -
cd ~/.config/sublime-text-3/Packages
git clone git@github.com:<%= github_username %>/<%= package_name %>.git <%= package_name %>
```

#### Windows

```bash
cd "%APPDATA%\Sublime Text 2\Packages"
- or ST 3 -
cd "%APPDATA%\Sublime Text 3\Packages"
git clone git@github.com:<%= github_username %>/<%= package_name %>.git <%= package_name %>
```

---

## Download

For download see [<%= package_name %>](https://github.com/<%= github_username %>/<%= package_name %>/releases)
