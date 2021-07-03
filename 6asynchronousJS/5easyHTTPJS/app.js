const http = new easyHTTP;

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// create data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts/', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Put
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Create delete
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});