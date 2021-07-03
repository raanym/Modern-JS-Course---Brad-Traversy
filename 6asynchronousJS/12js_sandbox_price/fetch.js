window.addEventListener('DOMContentLoaded', createForm);
document.querySelector('#button1').addEventListener('click', loadLocalJSONData);
document.querySelector('#button2').addEventListener('click', loadGoogleSheetJSONData);


function loadLocalJSONData(e) {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const tableData = data.Budget;
      console.log(tableData);
      document.body.innerHTML += `
      <table>
          <th>Month</th>
          <th>Income</th>
          <th>Spending</th>
          <th>Saving</th>
          <th>Savings RB</th>
        <tbody class='data'></tbody>
      </table>`

      tableData.forEach(data => {
        document.body.querySelector('.data').innerHTML += `
          <tr>
            <td>${data.Month}</td>
            <td>${data.Income}</td>
            <td>${data.Spending}</td>
            <td>${data.Saving}</td>
            <td>${data['Savings RB']}</td>
          </tr>
        `
      });
    })
    .catch(err => console.log(err));

  e.preventDefault();
}

function createForm() {
  const form = document.createElement('form');
  const input = document.createElement('input');
  const btn = document.createElement('button');
  input.className = 'form-input'
  btn.className = 'form-button';
  btn.appendChild(document.createTextNode('Add'));
  input.setAttribute('type', 'text');
  form.appendChild(input);
  form.appendChild(btn);
  const container = document.querySelector('.container');
  container.insertAdjacentElement('beforeend', form);
  document.querySelector('.form-button').addEventListener('click', addData);
}


function addData(e) {
  fetch('data.json', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(document.querySelector('.form-input'))
  }).then(res => res.json())
    .then(data => data)
    .catch(err => err);

  e.preventDefault();
}


function loadGoogleSheetJSONData() {
  fetch('https://spreadsheets.google.com/feeds/cells/1BK-KQYuGnHUYhgD9bXhZMgQkNvQWrixgQRvnRtiW06U/1/public/full?alt=json')
    .then(response => response.json())
    .then(data => {
      const tableData = data.feed.entry;

      let formattedSheet = {};

      // remap google sheet structure into a simpler array format
      tableData.map((item) => {
        const cell = item["gs$cell"];

        const row = cell.row;
        const col = cell.col;

        if (formattedSheet[row]) {
          formattedSheet[row] = Object.assign(formattedSheet[row], {
            [col]: cell.inputValue,
          });
          //   formattedSheet[cell.row] = { [cell.cell]: cell.inputValue };
        } else {
          formattedSheet[row] = { [col]: cell.inputValue };
        }
      });

      formattedSheet = Object.values(formattedSheet).map((item) =>
        Object.values(item)
      );
      formattedSheet.splice(0, 1);

      document.body.innerHTML += `
      <table>
        <th>Month</th>
        <th>Income</th>
        <th>Spending</th>
        <th>Savings</th>
        <th>Savings RB</th>
        <tbody class='tbody></tbody>
      </table>
    `

      formattedSheet.forEach((cur, i) => {
        document.body.querySelector('tbody').innerHTML += `
        <tr class=row-${i}></tr>
      `
        cur.forEach(el => {
          document.querySelector(`.row-${i}`).innerHTML += `
          <td>${el}</td>
        `
        })
      });
    })
    .catch(err => console.log(err));
}