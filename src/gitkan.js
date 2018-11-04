#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .command('color', 'tests the color of the command line')
  .parse(process.argv)

if (!program.commands.map(cmd => cmd._name).includes(program.args[0])) {
  program.help()
}

