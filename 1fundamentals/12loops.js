// FOR LOOP
// for (let i = 0; i < 10; i++) {
//   //console.log(i);
//   if (i === 2) {
//     console.log('2 is my favourite number');
//     continue; //go to the next iteration;
//   }

//   if (i === 5) {
//     console.log('stop the loop');
//     break; //break the loop
//   }

//   console.log('number ' + i);
// }


// WHILE LOOP
// let i = 0;

// while (i < 3) {
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE LOOP
// let j = 0;

// do {
//   console.log('Number ' + j);
//   j++;
// }
// while (j < 3);


// ARRAY LOOPING
const cars = ['Ford', 'Nissan', 'Honda', 'Toyota', 'Mazda'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// For Each Method
// cars.forEach(function (car, index, array) {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// })

// MAP METHOD
// const user = [
//   { id: 1, name: 'raaneem' },
//   { id: 2, name: 'hameed' },
//   { id: 3, name: 'yalvy' },
//   { id: 4, name: 'shabie' }
// ];

// const users = user.map(function (cur) {
//   return (cur.name);
// })

const user = {
  firstName: 'Mohamed',
  middleName: 'Raaneem',
  lastName: 'Ahmed',
  age: 26
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}