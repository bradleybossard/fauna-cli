#!/usr/bin/env node

'use strict';

const program = require('commander');
const chalk = require('chalk');

function runFauna(input, output) {
  console.log(input, output);
};

program
  .version('1.0.0')
  .arguments('<input> <output>')
  .usage('<input> <output>\n\n  where <input>=/path/to/input/config\n        <output>=/path/to/output/svg')
  .description('CLI tool for fauna library for generating animated L-Systems')
  //.option('-i, --input <input-config>','path in input config json')
  //.option('-o, --output <output-svg>', 'path to output svg file')
  .action(runFauna);

program.parse(process.argv);

if(!program.args.length) {
    program.help();
}
