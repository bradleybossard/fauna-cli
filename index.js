#!/usr/bin/env node

'use strict';

const program = require('commander');
const chalk = require('chalk');

program
  .version('1.0.0')
  .usage('--input <input> --output <output>')
  .description('CLI tool for fauna library for generating animated L-Systems')
  .option('-i, --input <input-config>','path in input config json')
  .option('-o, --output <output-svg>', 'path to output svg file')
  //.action('');
  .parse(process.argv);

if (!program.input) {
  console.log('');
  console.log(chalk.red.bold('  --input parameter required'));
  program.help();
}

if (!program.output) {
  console.log('');
  console.log(chalk.red.bold('  --output parameter required'));
  program.help();
}

