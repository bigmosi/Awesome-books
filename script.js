const bookList = document.querySelector('.book-lists');
const addBtn = document.getElementById('submit');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const key = 'BOOKS_LIST';

let BookObj = [];

class Books {
  constructor() {
    if (JSON.parse(localStorage.getItem(key)) != null) {
      this.BookObj = JSON.parse(localStorage.getItem(key));
    } else {
      this.BookObj = [];
    }
  }

  add(book, author) {
    this.BookObj.push({
      id: this.BookObj.length,
      title: book.value,
      author: author.value
    });
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BookObj));
  }

  remove(element) {
    const { id } = element.dataset;
    element.parentElement.remove()
    this.BookObj.splice(this.BookObj.findIndex((item) => item.id === parseInt(id, 10)), 1);
    localStorage.setItem('BOOKS_LIST', JSON.stringify(this.BookObj));
  }
}

function loadContent() {
  bookList.innerHTML = '';
  BookObj.forEach((obj) => {
    bookList.innerHTML += `
        <div class="container-1">
        <div class="container">
           <h4>${obj.title}</h4>
           <h3>${obj.author}</h3>
           <button type="button" onclick="removeBook(this)" class="btn" id="${obj.id}" >Remove</button>
        <hr/>
        </div>        
     </div> 
        `;
  });
}

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem(key)) != null) {
    BookObj = JSON.parse(localStorage.getItem(key));
    loadContent();
  }
}

const books = new Books();

function addBook() {
  books.add(bookTitle, bookAuthor);
  checkLocalStorage();
  loadContent();
}

/* eslint-disable */

function removeBook(element) {
    books.remove(element)
}

addBtn.addEventListener('click', addBook);

document.addEventListener('DOMContentLoaded', checkLocalStorage);
