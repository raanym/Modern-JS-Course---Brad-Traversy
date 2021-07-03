// Create some arrays
const numbers = [23, 44, 55, 94, 10];
const numbers2 = new Array(23, 44, 13, 50, 23);
const fruit = ['Banana', 'Mango', 'Kiwi', 'Watermelon', 'Strawberry', 'BlueBerry'];
const mixed = [true, undefined, null, 'hello', 22, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;
// check if is Array
val = Array.isArray(numbers);
// Get single value
val = numbers[2];
// insert into array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(100);

// MUTATING ARRAYS
// add to end of array
numbers.push(250);
// add to start of array
numbers.unshift(1);
// take off from the end
numbers.pop();
// take off from the start
numbers.shift();
// splice out values from any place splice(where to start, where to end);
numbers.splice(3, 1);
// reverse array
numbers.reverse();

// CONCATENATING ARRAYS
val = numbers.concat(numbers2);

// Sorting Arrays
val = fruit.sort();
val = numbers.sort();

// using compare function
val = numbers.sort((a, b) => a - b);
val = numbers.sort((a, b) => b - a);

// FIND
function under50(num) {
  return num < 50;
}

val = numbers.find(under50)

console.log(numbers);
console.log(val);