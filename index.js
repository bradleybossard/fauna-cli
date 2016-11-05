#!/usr/bin/env node

'use strict';
const program = require('commander');
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
  console.log('  --input parameter required');
  program.help();
}

if (!program.output) {
  console.log('');
  console.log('  --output parameter required');
  program.help();
}

