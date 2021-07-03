// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calcAge = function () {
  //   const dif = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(dif);
  //   console.log(ageDate.getUTCFullYear());
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calcAge = function () {
  const dif = Date.now() - this.birthday.getTime();
  const ageDate = new Date(dif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// Gets married
Person.prototype.getMarried = function (newLastName) {
  this.lastName = newLastName;
}

const raaneem = new Person('Mohamed', 'Raaneem', '1994-12-04');
const shabie = new Person('Aminath', 'Shabeen', '1997-06-02');

console.log(raaneem);
console.log(shabie.calcAge(), raaneem.getFullName());
console.log(shabie.getFullName(), raaneem.getFullName());
shabie.getMarried('Raaneem');
console.log(shabie.getFullName());
console.log(shabie.hasOwnProperty('firstName'));
console.log(shabie.hasOwnProperty('getFullName'));