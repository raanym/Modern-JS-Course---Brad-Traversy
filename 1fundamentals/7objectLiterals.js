const person = {
  firstName: 'Mohamed',
  middleName: 'Raaneem',
  lastName: 'Ahmed',
  age: 26,
  email: 'raaneem@gmail.com',
  hobbies: ['reading', 'running'],
  address: {
    city: 'Fuvahmulah',
    atoll: 'Gnaviyani'
  },
  getBirthYear() {
    return 2021 - this.age;
  }
}

let val;

val = person;
// get specific value or property
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address;
val = person.address.atoll;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'Raaneem', age: 26 },
  { name: 'Ahmed', age: 60 },
  { name: 'Mohamed', age: 94 },
  { name: 'Haleem', age: 75 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}