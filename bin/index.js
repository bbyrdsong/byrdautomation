#!/usr/bin/env node

const program = require('commander');
const configMover = require('../lib/config-mover');
const gitCloner = require('../lib/git');
const { version } = require('../package.json');

program
    .version(version);

// move-config
program
    .command('move-config', 'Moves proxy config files to and from desktop')
    .action(configMover());

// git [project-name] from my github repo
program
    .command('git', 'Performs git clone against the bbyrdsong github repository')
    .action(gitCloner());
