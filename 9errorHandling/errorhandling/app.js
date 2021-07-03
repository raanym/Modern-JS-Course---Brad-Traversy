const user = {
  email: 'raaneem@gmail.com'
}

try {

  // setTimeout(() => {
  //   myFunction();
  // }, 2000);      //doesn't work

  //myFunction();
  // null.myFunction();

  // eval('hello world');

  //decodeURIComponent('%');

  if (!user.name)
    // throw 'User has no name';
    throw new SyntaxError('User has  no name');

} catch (e) {
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result');
}