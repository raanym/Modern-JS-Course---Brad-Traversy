const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

const raaneem = Object.create(personPrototypes);

raaneem.firstName = 'Mohamed';
raaneem.lastName = 'Raaneem';
raaneem.age = 26;

console.log(raaneem);
raaneem.getsMarried('Shabie');
console.log(raaneem.greeting());

const shabie = Object.create(personPrototypes, {
  firstName: { value: 'Aminath' },
  lastName: { value: 'Shabeen' },
  age: { value: 30 }
});

console.log(shabie);
shabie.getsMarried('raaneem');
console.log(shabie.greeting());