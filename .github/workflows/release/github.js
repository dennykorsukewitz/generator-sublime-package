const fs = require('fs');
const path = require('path');
const package = require('../../../package.json');

package.name = '@dennykorsukewitz/generator-sublime-package';

// Update package.json with the updated name
fs.writeFileSync(
  path.join(__dirname, '../../../package.json'),
  JSON.stringify(package, null, 2),
);