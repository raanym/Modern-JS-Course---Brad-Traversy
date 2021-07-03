function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// greeting
Person.prototype.greeting = function () {
  return `Hello there my name is ${this.firstName} ${this.lastName}`;
}

// inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype);

// make customer.prototype return customer
Customer.prototype.constructor = Customer;

const Person1 = new Person('Mohamed', 'Raaneem');
console.log(Person1.greeting());

// customer constructor
function Customer(firstName, lastName, phoneNo, membership) {
  Person.call(this, firstName, lastName);
  this.phoneNo = phoneNo;
  this.membership = membership;
}

// create customer
const customer1 = new Customer('Tom', 'Smith', 7999391, 'standard');
console.log(customer1);

// customer greeting
Customer.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName} welcome to our company`;
}
console.log(customer1.greeting());