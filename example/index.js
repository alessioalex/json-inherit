'use strict';

const jsonInherit = require('../');

const prettyPrint = (msg, json) => {
  console.log(`${msg}:\n`);
  console.log(JSON.stringify(json, null, 2));
  console.log('---------------------------');
};

prettyPrint('parent', require(`${__dirname}/root.json`));
prettyPrint('inherits from', require(`${__dirname}/nested/nested.json`));
prettyPrint('result', jsonInherit(`${__dirname}/root.json`));
