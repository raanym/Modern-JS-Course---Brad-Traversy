// Create the element
const li = document.createElement('li');

// add a class to the element
li.className = 'collection-item';

// add an ID to element
li.id = 'new-item'

// add an attribute
li.setAttribute('title', 'newItem');

// create text node and append
li.appendChild(document.createTextNode('Hello World'));

// create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to UL
document.querySelector('ul.collection').appendChild(li);


console.log(li);