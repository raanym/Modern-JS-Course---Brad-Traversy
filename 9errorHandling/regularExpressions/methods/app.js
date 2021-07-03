let re;
re = /hello/;
re = /hello/i; //case insensitive flag
const str = 'hello welcome to hell'


// META CHARACTER SYMBOLS
re = /^h/i;   //must start with;
re = / WoRld$/i;   //must end with;
re = /^hello$/i;   //begins with and ends with
re = /h.llo/i;   //mtches any character
re = /h*llo/i;   //mtches any character 0 or more times
re = /gre?a?y/i; //Optional character
re = /gre?a?y\?/i; //Escape character (question mark being taken as a literal)


// BRACKETS [] - character sets
re = /gr[ae]y/i; //Must be either an A or E
re = /[GF]ray/i; //Must be either a G or F
re = /[^GF]ray/i;   //match anything except G or F
re = /[A-Z]ray/;   //Any uppercase letter
re = /[a-z]ray/;   //Any lowercase letter
re = /[A-Za-z]ray/;   //Any letter
re = /[0-9]ray/;   //match any digit between

// BRACES {} - Quantifiers
re = /Hel{2}o/i //must occur exactly x amount of times
re = /Hel{2,4}o/i //must occur x range of times
re = /Hel{2,}o/i //must occur x times or more

// PARANTHESES () - Grouping
re = /^([0-9]x){3}$/ // all should repeat at 3 times


// SHORTHAND CHARACTER CLASSES
re = /\w/; //word character - alphanumeric character(any letter,number) or underscore
re = /\w+/; //+= one or more
re = /\W/; // NON alphanumeric or underscore
re = /\d/;  // Match any digit first one
re = /\d+/;  // Match any digit 0 or more times
re = /\D+/; //match Non digit numbers 0 or more times
re = /\s/; //match white space characters
re = /\S/; //match white space characters
re = /Hell\b/i; //word boundary -- use actual word than a word that includes the characters


// ASSERTIONS
re = /x(?=y)/ //match x only if followed by y
re = /x(?!y)/ //match x only if NOT followed by y




const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log('The string matches the reg ', re.source);
  } else {
    console.log('The string does not the reg ', re.source);
  }
}

reTest(re, str);