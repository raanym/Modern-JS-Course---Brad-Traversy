const http = new EasyHTTP;

// Get users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// POST REQUEST
const data = {
  name: 'Mohamed Raaneem Ahmed',
  username: 'raanym',
  email: 'raaneem@gmail.com'
}

// const users = http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// PUT REQUEST
// const users = http.put('https://jsonplaceholder.typicode.com/users/1', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// DELETE REQUEST
const users = http.put('https://jsonplaceholder.typicode.com/users/1')
  .then(() => console.log('Deleted'))
  .catch(err => console.log(err));


