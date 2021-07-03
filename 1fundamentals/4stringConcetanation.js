const firstName = 'mohamed';
const lastName = 'Raaneem';
const age = 30;
const str = 'Hello there my name is Raaneem';
const tags = 'web development,web design,UI/UX Development,Graphics Design';

let val;

val = firstName + lastName;

//concatenation
val = firstName + ' ' + lastName;

//append
val = 'Mohamed ';
val += 'Raaneem';

val = 'Hello my name is ' + firstName + ' and I am ' + age;


//escaping
val = "I'm really awesome";
val = 'I\'m really awesome';


//length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[5];

//indexOf()
val = firstName.indexOf('m');
val = firstName.lastIndexOf('m');

//charAt()
val = firstName.charAt(2);
//get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Raaneem', 'Ahmed');

// includes()
val = str.includes('Raaneem');

console.log(val);