#!/usr/bin/env node

const program = require('commander');
const createUnitTests = require('./src/create-unit-tests');

program
  .command('create <pathToFile> [pathToUnitTest]')
  .description('Create initial unit tests based on exported elements')
  .version('0.0.1')
  .action((pathToFile, pathToUnitTest) => createUnitTests(pathToFile, pathToUnitTest))

program.parse(process.argv); // end with parse to parse through the input
