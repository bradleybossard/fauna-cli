#!/usr/bin/env node

'use strict';

const fs = require('fs');
const program = require('commander');
const fauna = require('fauna');
const pkg = require('./package.json');

function runFauna(input, output) {
  const config = JSON.parse(fs.readFileSync(input, 'utf8'));
  const svg = fauna.runConfig(config);
  fs.writeFile(output, svg, function(err) {
    if(err) {
      throw err;
    }
  }); 
};

program
  .version(pkg.version)
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
