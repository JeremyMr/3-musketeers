#!/usr/bin/env node

const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

//Array of argv
const argv = process.argv.slice(2);

//Function to checker if the user wrote --save or --help or --version
helpers(argv);

//Main command
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

//Execution of the command
cash(command);
