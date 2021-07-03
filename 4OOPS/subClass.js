class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }

}

const raaneem = new Person('Mohamed', 'Raaneem');
console.log(raaneem.greeting());

class Customer extends Person {
  constructor(firstName, lastName, phoneNo, membership) {
    super(firstName, lastName);
    this.phoneNo = phoneNo;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const shabie = new Customer('Aminath', 'Shabeen', 9649754, 'standard');
console.log(shabie);
console.log(Customer.getMembershipCost());