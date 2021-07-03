class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName
    this.birthDay = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const dif = Date.now() - this.birthDay.getTime();
    const ageDate = new Date(dif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const raaneem = new Person('Mohamed', 'Raaneem', '1994-12-04');
raaneem.getsMarried('Shabie');
console.log(raaneem);
console.log(Person.addNumbers(1, 2));
