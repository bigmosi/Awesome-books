// Initializing useful variables
let BookData = [];

const addBtn = document.getElementById('btn-1');
const book = document.getElementById('book');
const author = document.getElementById('author');

const newElement = document.getElementById('book-list');
const KEY = 'BOOKS_LIST';

class Books {
  constructor() {
    if (JSON.parse(localStorage.getItem(KEY)) != null) {
      this.BookData = JSON.parse(localStorage.getItem(KEY));
    } else {
      this.BookData = [];
    }
  }

  add(book, author) {
    this.BookData.push({
      id: this.BookData.length,
      title: book.value,
      author: author.value,
    });
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BookData));
  }

  remove(element) {
    const { id } = element.dataset;
    element.parentElement.remove();
    this.BookData.splice(this.BookData.findIndex((item) => item.id === parseInt(id, 10)), 1);
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BookData));
  }
}

function loadContent() {
  newElement.innerHTML = '';
  BookData.forEach((obj) => {
    newElement.innerHTML += `
                    <div class="book-container">
                    <div class="book">
                      <h4 class="text-1">"${obj.title}" by ${obj.author}</h4>
                    </div>
                    <div class="btn-1">
                       <button type="button" onclick="removeBook(this)" class="btn" data-id="${obj.id}">Remove</button>
                     </div>
                </div>
     
`;
  });
}

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem(KEY)) != null) {
    BookData = JSON.parse(localStorage.getItem(KEY));
    loadContent();
  }
}

const books = new Books();

function addBook() {
  books.add(book, author);
  checkLocalStorage();
  loadContent();
}

/* eslint-disable */

function removeBook(element) {
  books.remove(element);
}
/* eslint-enable */

addBtn.addEventListener('click', addBook);

document.addEventListener('DOMContentLoaded', checkLocalStorage);
