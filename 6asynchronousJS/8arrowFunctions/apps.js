// const sayHello = function () {
//   console.log('Hello');
// }

// sayHello();

// const sayHello = () => {
//   console.log('hello')
// }


// ONE LINE RETURN
//const sayHello = () => console.log('Hello');
//const sayHello = () => 'Hello';


// RETURN OBJECT
// const sayHello = () => ({ msg: 'Hello' });

// SINGLE PARAM DOES NOT NEED PARANTHESES
// const sayHello = name => console.log(`Hello ${name}`);

// MULTIPLE PARAM NEED PARATHESES
// const sayHello = (firstName, lastName) => console.log(`${firstName} ${lastName}`);

// console.log(sayHello('Mohamed', 'Raaneem'));

const users = ['Nathan', 'John', 'William'];

// const nameLength = users.map(function (user) {
//   return user.length;
// });

const nameLength = users.map(name => name.length);

console.log(nameLength);



