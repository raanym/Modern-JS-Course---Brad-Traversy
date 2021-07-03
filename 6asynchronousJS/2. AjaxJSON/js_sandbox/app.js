document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      //console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
      <li>ID: ${customer.id}</li>
      <li>Name: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>
      `
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

// Load all customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = ``;
      customers.forEach(cus => {
        output += `
        <h5>Customer ${cus.id}</h5>
        <ul>
        <li>ID: ${cus.id}</li>
        <li>Name: ${cus.name}</li>
        <li>Company: ${cus.company}</li>
        <li>Phone: ${cus.phone}</li>
        </ul>
        `
      })
      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}