const createDirectory = require('./create-directory');
const createUnitTest = require('./create-unit-test');

function createUnitTests(pathToFile, pathToUnitTest) {
  createDirectory(pathToUnitTest);
  createUnitTest({ pathToFile, pathToUnitTest })
}

module.exports = createUnitTests;
