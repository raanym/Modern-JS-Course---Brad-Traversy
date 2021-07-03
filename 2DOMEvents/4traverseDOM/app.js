let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0]
val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;

// NODE TYPES
// 1 - Element
// 2- Attribute (deprecated
// 3- text node
// 8 comment
// 9 document itself
// 10 doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'hello';

// Children of children
val = list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

// get parent nodes
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get prev siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);