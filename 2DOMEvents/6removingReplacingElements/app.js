// REPLACE ELEMENt

// Create Element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('Hello Brada'));
// get old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();


// remove child element
list.removeChild(lis[1]);

// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// CLaSSES
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// ATTRIBUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);