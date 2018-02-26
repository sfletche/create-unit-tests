const fs = require('fs');
const findInFiles = require('find-in-files');
const { getPascalCase, getDestinationPath } = require('./helpers')
const getContent = require('./content/get-content');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("created unit tests!");
}

function createUnitTest({ pathToFile, pathToUnitTest }) {
  const fileName = getPascalCase(pathToFile);
  const path = getDestinationPath({ pathToFile, pathToUnitTest });

  const exportedElements = getExportedElements(pathToFile);

  const content = getContent({ pathToFile, pathToUnitTest, fileName, exportedElements });
  fs.writeFile(path, content, writeHandler);
}

module.exports = createUnitTest;
