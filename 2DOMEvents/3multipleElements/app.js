// document.GetElementsByClassName()

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.GetElementsByTagName()
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// convert html collection into an array
// lis = Array.from(lis);

// lis.reverse();
// lis.forEach(function (item, index) {
//   item.textContent = `${index} : Hello`
// });

// console.log(lis);

// document.querySelectorAll()
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (item, index) {
  item.textContent = `${index} : Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (item, index) {
  item.style.backgroundColor = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.backgroundColor = '#f4f4f4';
}


console.log(items);