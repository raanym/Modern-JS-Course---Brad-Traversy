// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() { }

// add book to UI
UI.prototype.addBookToList = function (book) {
  const list = document.querySelector('#book-list');
  // create tr element
  const row = document.createElement('tr');
  // insert cols
  row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href='#' class='delete'>x</a><td>`;

  list.appendChild(row);
}

// Show UI alert
UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));

  // get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  // timeout after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Books from UI
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields from UI
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// store constructor function
function Store() { }


Store.getBooks = function () {
  let books;
  if (localStorage.getItem('books') === null) {
    books = []
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}

Store.displayBooks = function () {
  const books = Store.getBooks();
  books.forEach(book => {
    const ui = new UI();
    ui.addBookToList(book);
  });
}

// add books
Store.addBook = function (book) {
  const books = Store.getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}
Store.removeBook = function (isbn) {
  const books = Store.getBooks();

  books.forEach((book, index) => {
    if (isbn === book.isbn) books.splice(index, 1);
  });

  localStorage.setItem('books', JSON.stringify(books));
}


// DOM LOAD EVENT
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  // get form values
  const title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI Object
  const ui = new UI();

  // validate
  if (title === '' || author === '' || isbn === '') {
    // error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // add book to list
    ui.addBookToList(book);
    Store.addBook(book);
    // show success
    ui.showAlert('The book is added', 'success');

    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for DELETE
document.querySelector('#book-list').addEventListener('click', function (e) {
  const ui = new UI();

  //remove book
  ui.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // show message
  ui.showAlert('The book has been removed.', 'success');

  e.preventDefault();
});
