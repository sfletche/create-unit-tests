const _ = require('lodash');
const path = require('path');

function getFileNameFromPath(pathToFile) {
  return path.parse(pathToFile).base;
}

function getKebabCase(pathToFile) {
  const fileName = getFileNameFromPath(pathToFile);
  return _.kebabCase(fileName.split('.')[0]);
}

function getPascalCase(pathToFile) {
  const fileName = getFileNameFromPath(pathToFile);
  return _.startCase(fileName.split('.')[0]).replace(/\s/g, '');
}

function getDestinationPath({ pathToFile, pathToUnitTest }) {
  const kebabCase = getKebabCase(pathToFile);
  return `${pathToUnitTest}/${kebabCase}-test.js`;
}

module.exports = {
  getKebabCase,
  getPascalCase,
  getDestinationPath,
};
