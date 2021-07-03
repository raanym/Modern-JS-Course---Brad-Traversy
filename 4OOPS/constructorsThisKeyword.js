// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calcAge = function () {
    const dif = Date.now() - this.birthday.getTime();
    const ageDate = new Date(dif);
    console.log(ageDate.getUTCFullYear());
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('brad');
// const john = new Person('john');
// console.log(brad.name, john);

const raanym = new Person('Raanym', '12-04-1994');

console.log(raanym.calcAge());