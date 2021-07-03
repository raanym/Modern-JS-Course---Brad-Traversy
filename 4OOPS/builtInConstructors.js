// String

const name1 = 'Jeff';
const name2 = new String('Jeff');
name2.foo = 'bar';

console.log(name1, name2);

console.log(typeof name1, typeof name2);

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num1, num2);
console.log(typeof num1, typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool1, bool2);
console.log(typeof bool1, typeof bool2);

// Functions
const getSum1 = function (x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1+2');

// Objects
const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' });
console.log(john1, john2);

// Arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(1, 2, 3, 4, 5);
console.log(array1, array2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re1, re2);