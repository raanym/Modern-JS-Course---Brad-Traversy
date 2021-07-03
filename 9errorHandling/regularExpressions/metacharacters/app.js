let re;
re = /world/i; // i - case insensitive
// re = /world/g; // g - global search all instances of world

// console.log(re);
// console.log(re.source);

let result;
// exec() return result in an array if there is a match or it will return null if no match
result = re.exec('hello world');

// test() - returns true or false if its a match
result = re.test('how about World world');

// match() - return result array or null
let str = 'Hello World';
result = str.match(re);

// search() - return index of first match if not found returns a negative one
str = 'Hello World hehe';
result = str.search(re);

// replace() - return a new string with some or all matches of a pattern
str = 'Hello World';
let newStr = str.replace(re, 'Maldives');
result = newStr;

console.log(result);