function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// GET REQUEST
easyHTTP.prototype.get = function (url, cb) {
  this.http.open('GET', url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      cb(null, self.http.responseText);
    } else {
      callback('error ' + self.http.status);
    }
  }
  this.http.send();
}
// POST REQUEST
this.easyHTTP.prototype.post = function (url, data, cb) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function () {
    cb(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// PUT REQUEST
this.easyHTTP.prototype.put = function (url, data, cb) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function () {
    cb(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// DELETE REQUEST
this.easyHTTP.prototype.delete = function (url, cb) {
  this.http.open('DELETE', url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      cb(null, 'Post Deleted');
    } else {
      callback('error ' + self.http.status);
    }
  }
  this.http.send();
}