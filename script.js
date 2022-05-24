// Initializing useful variables
const bookData = [];

const addBtn = document.getElementById('btn');
const title = document.getElementById('book-title');
const author = document.getElementById('author');

const newDiv = document.createElement('div');
const myForm = document.getElementById('form');
const bookList = document.getElementById('book-list');
newDiv.classList.add('mylist');
bookList.appendChild(newDiv);

const newBook = (title, author) => {
    const data = {
        bookTitle: title,
        bookAuthor: author,
    };
    bookData.push(data);
    localStorage.setItem('book', JSON.stringify(bookData));
    newDiv.innerHTML += `<div>
          <p><strong>${data.bookTitle}</strong></p>
          <p><strong>${data.bookAuthor}</strong></p>
          <button class="remove">delete</button>
          <hr/>
          </div>`;
    myForm.reset();
};

// Remove book from store function
const removeBook = () => {
  newDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      const list = e.target.parentElement;
      const bookTitle = list.childNodes[4].value;
      const remain = bookData.filter((book) => book.bookTitle !== bookTitle);
      localStorage.setItem('book', JSON.stringify(remain));
      newDiv.removeChild(list);
    }
  });
};

// Function to get data from local storage
const getDataFromStore = () => {
  window.addEventListener('load', () => {
    if (localStorage.getItem('book')) {
      const books = JSON.parse(localStorage.getItem('book'));
      books.forEach((data) => {
        newDiv.innerHTML += `<div>
              <p><strong>${data.bookTitle}</strong></p>
              <p><strong>${data.bookAuthor}</strong></p>
              <button class="remove">delete</button>
              <hr/>
              </div>`;
        bookData.push(books);
      });
    }
  });
};

