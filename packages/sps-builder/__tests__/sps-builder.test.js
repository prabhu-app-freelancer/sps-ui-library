'use strict';

const spsBuilder = require('..');
const assert = require('assert').strict;

assert.strictEqual(spsBuilder(), 'Hello from spsBuilder');
console.info('spsBuilder tests passed');
