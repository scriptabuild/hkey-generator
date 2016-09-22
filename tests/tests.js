const assert = require("assert");
const HKeyGenerator = require("../index");

// create root hkey
var level1HKey = new HKeyGenerator();
assert.deepEqual(level1HKey.key, [1])
console.log(level1HKey.key);

var level2HKey1 = level1HKey.spawn();
assert.deepEqual(level2HKey1.key, [1,1])
console.log(level2HKey1.key);

var level2HKey2 = level1HKey.spawn();
assert.deepEqual(level2HKey2.key, [1,2])
console.log(level2HKey2.key);

var level3HKeyFrom1 = level2HKey1.spawn();
assert.deepEqual(level3HKeyFrom1.key, [1,1,1])
console.log(level3HKeyFrom1.key);

var level3HKey1From2 = level2HKey2.spawn();
assert.deepEqual(level3HKey1From2.key, [1,2,1])
console.log(level3HKey1From2.key);

var level3HKey2From1 = level2HKey1.spawn();
assert.deepEqual(level3HKey2From1.key, [1,1,2])
console.log(level3HKey2From1.key);


