const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
]

// SYNCHRONOUS
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPost() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(post => {
//       output += `<li>${post.title}</li>`;
//     })
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post three', body: 'This is post three' });
// getPost();


// ASYNCHRNOUS
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: something went wrong');
      }
    }, 2000);
  });
}

createPost({ title: 'Post three', body: 'This is post three' })
  .then(getPost)
  .catch(function (err) {
    console.log(err);
  })

function getPost() {
  setTimeout(function () {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000);
}