document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN - type of req / url
  xhr.open('GET', 'data.txt', true);

  // Optional - used for spinners or loaders
  xhr.onprogress = function () {
    console.log('Ready State: ', xhr.readyState);
  }

  xhr.onload = function () {
    console.log('Ready State: ', xhr.readyState);
    // HTTP STATUSES
    // 200 OK
    // 403 FORIBDDEN
    // 404 NOT FOUND
    // if (this.status === 200) {
    //   console.log(this.responseText);
    // }
    document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
  }

  // xhr.onreadystatechange = function () {
  //   console.log('Ready State: ', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function () {
    console.log('request error');
  }

  xhr.send();

  // READY STATE VALUES
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
}