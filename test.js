'use strict';

const assert = require('assert');
const jsonInherit = require('./');

const output = {
  "a": {
    "c": {
      "d": 2,
      "k": 222,
      "f": 3333
    },
    "b": 1,
    "eee": 212
  },
  "f": 0,
  "e": 0
};

const result = jsonInherit(`${__dirname}/example/root.json`);
assert.ok(JSON.stringify(output) === JSON.stringify(result));
