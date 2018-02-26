const fs = require('fs');
const _ = require('lodash');

function getExportedElements(pathToFile) {
  const myRegexp = RegExp('export\s*{\s*([a-zA-Z0-9,\s*]+)\s*}','g');
  try {
    const data = fs.readFileSync(pathToFile, 'utf8');
    const match = myRegexp.exec(data);
    return match.split(',').map(_.trim)
  } catch(e) {
    console.log('Error:', e.stack);
  }
}

module.exports = getExportedElements;
