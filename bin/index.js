#!/usr/bin/env node

const program = require('commander');
const configMover = require('../lib/config-mover');
const { version } = require('../package.json');

program
    .version(version)
    .command('move-config', 'Moves proxy config files to and from desktop')
    .action(configMover());
