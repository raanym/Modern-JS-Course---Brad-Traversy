let val;

const today = new Date();
let birthDate = new Date('12-04-1994');
birthDate = new Date('December 4 1994');
birthDate = new Date('12/4/1994');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //amount of seconds passed since january 1 1970

birthDate.setMonth(02);
birthDate.setDate(12);
birthDate.setFullYear(1990);
birthDate.setHours(19);
birthDate.setMinutes(30);
birthDate.setSeconds(32);

console.log(birthDate);