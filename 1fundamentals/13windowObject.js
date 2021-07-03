// WINDOW METHODS OBJECTS PROPERTIES
//console.log(123);

// alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// CONFIRM
// if (confirm('Are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('No');
// }


let val;

// OUTER HEIGHT AND WIDTH
val = window.outerHeight;
val = window.outerWidth;

// inner HEIGHT AND WIDTH
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// redirect
//val = window.location.href = 'https://google.com';
//reload
//val = window.location.reload();

// HISTORY OBJECT
// window.history.go(-2);
val = window.history.length;


//NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.language;

console.log(val);