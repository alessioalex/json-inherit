## json-inherit

Requiring JSON files with inheritance baked in.

### usage

`npm i json-inherit`

```js
const jsonInherit = require('json-inherit');

const prettyPrint = (msg, json) => {
  console.log(`${msg}:\n`);
  console.log(JSON.stringify(json, null, 2));
  console.log('---------------------------');
};

prettyPrint('parent', require(`${__dirname}/root.json`));
prettyPrint('inherits from', require(`${__dirname}/nested/nested.json`));
prettyPrint('result', jsonInherit(`${__dirname}/root.json`));

/*
parent:

{
  "_inherit": "./nested/nested.json",
  "a": {
    "b": 1,
    "c": {
      "d": 2,
      "f": 3333
    },
    "eee": 212
  },
  "e": 0
}
---------------------------
inherits from:

{
  "a": {
    "c": {
      "d": 1,
      "k": 222
    }
  },
  "f": 0
}
---------------------------
result:

{
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
}
---------------------------
*/
```

### use cases

Useful when having to generate configuration files that share many properties.

### license MIT

https://alessioalex.mit-license.org/
