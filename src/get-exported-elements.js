const fs = require('fs');
const _ = require('lodash');

function getExportedElements(pathToFile) {
  // could not figure out how to get regex to match across multiple lines
  // const myRegexp = RegExp('export {(.*)}','g');

  try {
    const data = fs.readFileSync(pathToFile, 'utf8');
    const exportIndex = data.indexOf('export {');
    let match = data.slice(exportIndex+8)
    // let match = myRegexp.exec(data) || [];
    // match = myRegexp.exec(`export { \na, b, c }`) || [];
    console.log(match.split(',').slice(0, -1).map(_.trim));
    // split on comma, drop last element ('{;'), trim white space on each
    return match.split(',').slice(0, -1).map(_.trim)
  } catch(e) {
    console.log('Error:', e.stack);
  }
}

module.exports = getExportedElements;
