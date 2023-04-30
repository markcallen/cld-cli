const path = require('node:path'); // eslint-disable unicorn/prefer-module

process.env.TS_NODE_PROJECT = path.resolve('test/tsconfig.json');
process.env.NODE_ENV = 'development';

global.oclif = global.oclif || {};
global.oclif.columns = 80;
