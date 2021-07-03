let a, b;
[a, b, ...rest] = [100, 200, 500, 700, 600];

({ a, b, ...rest } = { a: 1000, b: 2000, c: 300, d: 500, e: 600, f: 7000 });

// console.log(a, b, rest);


// ARRAY DESTRUCTURING
const people = ['Raaneem', 'Shabie', 'Minu', 'Mom'];

const [raaneem, shabie, minu, mom] = people;

//console.log(raaneem, shabie, minu, mom);

// Parse array returned from function
function getPeople() {
  return ['raaneem', 'shabie', 'minu', 'mom'];
}

let p1, p2, p3, p4;
[p1, p2, p3, p4] = getPeople();
// console.log(p1, p2, p3, p4);


// OBJECT DESTRUCTURING
const person = {
  name: 'raaneem',
  age: 26,
  city: 'Fuvahmulah',
  gender: 'Male'
}

// OLD ES5
// const name = person.name,
//   age = person.age,
//   city = person.city;

// ES6 DESTRUCTURING
const { name, age, city } = person;
console.log(name, age, city);