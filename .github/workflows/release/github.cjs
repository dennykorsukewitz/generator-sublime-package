const fs = require('fs');
const path = require('path');
const packageJson = require('../../../package.json');

packageJson.name = '@dennykorsukewitz/generator-sublime-package';

// Update package.json with the updated name
fs.writeFileSync(
  path.join(__dirname, '../../../package.json'),
  JSON.stringify(packageJson, null, 2),
);