document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJSON() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(data => {
        output += `
        <ul>
        <li>${data.title}</li>
        <li>${data.body}</li>
        </ul>
        `
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(data => {
        output += `
      <li>${data.id}:${data.login}</li>
      `
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}




