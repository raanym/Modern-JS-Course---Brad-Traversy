const name = 'Raaneem';
const age = 26;
const job = 'Web Developer';
const city = 'Fuvahmulah';
let html;


// Without template strings (ES5 way)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
  '<li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>City: ' + city + '</li>' +
  '</ul>';


// with template strings/template literals
html = `<ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${10 + 10}</li>
        <li>${Math.floor(Math.random() * 10)}</li>
        <li>${(age < 30) ? 'Under 30' : 'Over 30'}</li>
        </ul>`;


document.body.innerHTML = html;