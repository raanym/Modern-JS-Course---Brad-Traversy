const id = 100;

// EQUAL TO
// if (id == 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // NOT EQUAL TO
// if (id != 101) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // EQUAL TO VALUE & TYPR
// if (id === 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// // NOT EQUAL TO VALUE & TYPE
// if (id !== 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is: ${id}`);
// } else {
//   console.log('No ID');
// }

// GREATER THAN LESS ThAN
// if (id >= 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// IF ELSE
// const color = 'yellow';

// if (color === 'red') {
//   console.log('Red color');
// } else if (color === 'blue') {
//   console.log('Blue color');
// } else {
//   console.log('Color is not red or blue');
// }


// LOGICAL OPERATORS
const name = 'Raaneem';
const age = 26;

// AND &&
if (age > 0 && age <= 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in th race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log((id === 100) ? 'Correct' : 'Incorrect');

// Without braces
if (id === 100)
  console.log('correct');
else
  console.log('incorrect');