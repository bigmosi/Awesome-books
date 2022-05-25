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


// const newBook = (title, author) => {
//   const data = {
//     bookTitle: title,
//     bookAuthor: author,
//   };
//
//   bookData.push(data);
//   localStorage.setItem('book', JSON.stringify(bookData));
//   newDiv.innerHTML += `<div>
//     <p><strong>${data.bookTitle}</strong></p>
//     <p><strong>${data.bookAuthor}</strong></p>
//     <button class="remove">delete</button>
//     <hr/>
//     </div>`;
//   myForm.reset();
// };
//
// // Remove book from store function
// const removeBook = () => {
//   newDiv.addEventListener('click', (e) => {
//     if (e.target.classList.contains('remove')) {
//       const list = e.target.parentElement;
//       const bookTitle = list.childNodes[4].value;
//       const remain = bookData.filter((book) => book.bookTitle !== bookTitle);
//       localStorage.setItem('book', JSON.stringify(remain));
//       newDiv.removeChild(list);
//     }
//   });
// };
//
// // Function to get data from local storage
// const getDataFromStore = () => {
//   window.addEventListener('load', () => {
//     if (localStorage.getItem('book')) {
//       const books = JSON.parse(localStorage.getItem('book'));
//       books.forEach((data) => {
//         newDiv.innerHTML += `<div>
//               <p><strong>${data.bookTitle}</strong></p>
//               <p><strong>${data.bookAuthor}</strong></p>
//               <button class="remove">delete</button>
//               <hr/>
//               </div>`;
//         bookData.push(books);
//       });
//     }
//   });
// };
//
// // Calling the newBook function
//
// addBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (title.value.trim() === '') return;
//   if (author.value.trim() === '') return;
//   newBook(title.value, author.value);
// });
//
// removeBook();
//
// getDataFromStore();
