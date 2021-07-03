class Sheet {
  constructor() {
    this.id = '145hgd71MMAwtmpppjsxu-Zo54_lu-95nEBQv6AjjZKs';
  }

  async fetchData() {
    const sheetPromise = fetch(`https://spreadsheets.google.com/feeds/cells/${this.id}/1/public/full?alt=json`);
    const sheet = await sheetPromise;
    const sheetData = await sheet.json();

    return {
      sheetData
    }
  }

  formatSheet(data) {
    const tableData = data.sheetData.feed.entry;

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
        // formattedSheet[cell.row] = { [col]: cell.inputValue };
      } else {
        formattedSheet[row] = { [col]: cell.inputValue };
      }
    });

    formattedSheet = Object.values(formattedSheet).map((item) =>
      Object.values(item)
    );
    // formattedSheet.splice(0, 1);

    return formattedSheet;
  }
}



const s = new Sheet();

s.fetchData()
  .then(data => {
    const formattedData = s.formatSheet(data);
    console.log(formattedData);

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const thead = document.createElement('thead');

    formattedData.forEach((row, rowIndex) => {
      const tr = document.createElement('tr');


      row.forEach((col, colIndex) => {

        if (rowIndex === 1) {
          const th = document.createElement('th');
          th.innerText = col;
          tr.appendChild(th);
          thead.appendChild(tr);

        } else {
          //   const businessName = col[1];
          // const village = col[2];
          // const type = col[3];
          // const delivery = col[5];
          // const viber = col[6];
          // const permit = col[7];
          // const policy = col[8];
          // const tr = document.createElement('tr');\\
          // let regex = /^[\d]+$/g

          // if(col.exec(regex)) {

          // }

          const td = document.createElement('td');
          let numberArr;
          let regex = /([679][0-9]{5,})+/g;
          if (regex.test(col)) {
            numberArr = col.match(regex);
            if (numberArr) {
              numberArr.forEach(no => {
                const tr = document.createElement('tr');
                const noTd = document.createElement('td');
                noTd.innerText = no;
                tr.appendChild(noTd)
                td.appendChild(tr);
              });
            }

          } else {
            td.innerText = col;
          }

          tr.appendChild(td);
          tbody.appendChild(tr);
        }
      });
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
  })