const _ = require('lodash');
const getUnitTest = require('./get-unit-test');

function getRelativeLocation(pathToFile, pathToUnitTest) {
  if (pathToFile.indexOf(pathToUnitTest) === 0) {
    return './';
  }
  const testPathSegments = pathToUnitTest.split('/');
  return '../'.repeat(testPathSegments.length);
}

function getContent({ pathToFile, pathToUnitTest, fileName, exportedElements }) {
  const pathToFileMinusExt = pathToFile.replace(/\.[^/.]+$/, '');
  const relativeLocation = getRelativeLocation(pathToFile, pathToUnitTest);
  return `import ${fileName} from '${relativeLocation}${pathToFileMinusExt}';

describe('${fileName}', () => {${exportedElements.map(getUnitTest).join('')}
});
`;
}

module.exports = getContent;
