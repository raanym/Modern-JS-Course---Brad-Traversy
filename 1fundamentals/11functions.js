// FUNCTION DECLARATIONS
function greet(firstName = 'Mohamed', lastName = 'Raaneem') {
  //console.log('Hello');
  // if (typeof firstName === 'undefined') { firstName = 'Mohamed' };
  // if (typeof lastName === 'undefined') { lastName = 'Raaneem' };

  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Amanullah', 'Ibrahim'));
console.log(greet());



// FUNCTION EXPRESSION
const square = function (x = 8) {
  return x * x;
};

console.log(square(2));
console.log(square());


// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS - IIFEs
(function () {
  console.log('IIFE ran');
})();

(function (name) {
  console.log('Hello ' + name)
})('Raanym');


// PROPERTY METHODS
const todo = {
  add: function () {
    console.log('add to do');
  },

  edit: function (id) {
    console.log(`Edit todo ID ${id}`);
  }
}

todo.delete = function (id) {
  console.log(`Delete ID ${id} from todo`);
}

todo.add();
todo.edit(2);
todo.delete(3);