document.querySelector('#button1').addEventListener('click', loadLocalJSONData);
document.querySelector('#button2').addEventListener('click', loadGoogleSheetJSONData);

function loadLocalJSONData(e) {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);

      const income = data.Budget.map(row => parseInt(row.Income)).reduce((pr, cr) => pr + cr);

      data.Budget.forEach(row => {
        document.body.innerHTML += `
        <li>${row.Month}: ${row.Income}</li>
      `
      });

      document.body.innerHTML += `<h3>Total Income: ${income}</h3>`;

    }
  }

  xhr.onerror = function () {
    console.log('error');
  }

  xhr.send();

  e.preventDefault();
}

function loadGoogleSheetJSONData(e) {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://spreadsheets.google.com/feeds/cells/1BK-KQYuGnHUYhgD9bXhZMgQkNvQWrixgQRvnRtiW06U/1/public/full?alt=json', true);

  xhr.onload = function () {
    const data = JSON.parse(this.responseText).feed.entry;

    let formattedSheet = {};

    // remap google sheet structure into a simpler array format
    data.map((item) => {
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


    console.log(formattedSheet);
  }

  xhr.send();

  e.preventDefault();
}