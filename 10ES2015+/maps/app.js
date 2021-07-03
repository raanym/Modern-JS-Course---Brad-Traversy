// MAPS = key-value pairs - can you any type as a key or value

const map1 = new Map();

// set keys
const key1 = 'some string',
  key2 = {},
  key3 = function () { };

// set map values
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// get values by keys
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));


// count vales
// console.log(map1.size);

// iterating through maps
// for (let [key, value] of map1) {
//   console.log(key, value);
// }

// for (let key of map1.keys()) {
//   console.log(key);
// }

// for (let value of map1.values()) {
//   console.log(value);
// }

// map1.forEach((value, key) => {
//   console.log(value, key);
// });


// convert to array
const keyValArr = Array.from(map1);
console.log(keyValArr);

const valArr = Array.from(map1.values());
console.log(valArr);

const keyArr = Array.from(map1.keys());
console.log(keyArr);