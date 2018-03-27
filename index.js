'use strict';

const path = require('path');
const deepmerge = require('deepmerge');

function buildJson(file, existingCache) {
  const cache = existingCache || new Map();
  const cachedData = cache.get(file);

  if (cachedData) {
    return cachedData;
  }

  let json = require(file);

  if (buildJson.INHERIT_KEY in json) {
    const childPath = path.join(path.dirname(file), json[buildJson.INHERIT_KEY]);

    json = deepmerge(
      buildJson(
        childPath,
        cache
      ),
      json
    );

    delete json[buildJson.INHERIT_KEY];
    cache.set(file, json);

    return json;
  }

  return json;
};

buildJson.INHERIT_KEY = '_inherit';

module.exports = buildJson;
