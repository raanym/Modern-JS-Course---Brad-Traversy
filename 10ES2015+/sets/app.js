// STORE UNIQUE VALUES OF ANY TYPE
const set1 = new Set();

// add values
set1.add(100);
set1.add('a stringuuu');
set1.add({ name: 'raaneem' });
set1.add({ name: 'raaneem' });
set1.add(true);
set1.add(100);


const set2 = new Set([1, true, false, 'hello',]);
// console.log(set2);


// get count
// console.log(set1.size);

// check for values
// console.log(set1.has(100));
// console.log(set1.has(true));
// console.log(set1.has(50 + 50));
// console.log(set1.has({ name: 'raaneem' }));

// delete from the set
set1.delete(100);

// iterating through sets
// for (let item of set1) {
//   console.log(item);
// }

set1.forEach(item => {
  //console.log(item);
});

// convert to array
setArr = Array.from(set1);

console.log(setArr);
console.log(set1);
