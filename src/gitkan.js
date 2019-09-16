#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .command('color', 'tests the color of the command line')
  .command('pulls', 'shows all pull requests')
  .command('show', 'shows the Kanban Board')
  .command('./config', 'shows configuration')
  .parse(process.argv)

if (!program.commands.map(cmd => cmd._name).includes(program.args[0])) {
  program.help()
}

