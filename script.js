/* eslint-disable no-alert */
class Books {
  constructor(title, author) {
    // Initializing useful variables
    this.title = title;
    this.author = author;

    this.table = document.createElement('table');
    this.tbody = document.createElement('tbody');
    this.myForm = document.getElementById('form');
    this.bookList = document.getElementById('book-list');
    this.table.appendChild(this.tbody);
    this.bookList.appendChild(this.table);
    this.listTitle = document.querySelector('.list-title');

    this.bookData = (localStorage.book != null) ? JSON.parse(localStorage.book) : [];
  }

  addBook() {
    if (this.title.value === '' || this.author.value === '') {
      this.listTitle.innerHTML = 'Please fill the field below';
    } else {
      this.bookData.push({ bookTitle: this.title.value, bookAuthor: this.author.value });
      this.updateStore();
    }
  }

  removeBook(id) {
    this.bookData.splice(id, 1);
    this.updateStore();
    if (this.bookData.length === 0) {
      this.listTitle.innerHTML = 'Books List is empty';
    } else {
      this.listTitle.innerHTML = '';
    }
  }

  displayBooks() {
    this.tbody.innerHTML = '';
    let id = 0;

    this.bookData.forEach((book) => {
      this.tbody.innerHTML
        += ` 
          <tr>
          <td>
            <strong>"${book.bookTitle}"</strong>
            <span><strong>by ${book.bookAuthor}</strong></span>
          </td>
          <td class="remove" onClick="book.removeBook(${id})">Remove</td>
          </tr> 
`;
      id += 1;
    });
  }

  updateStore() {
    localStorage.book = JSON.stringify(this.bookData);
    this.displayBooks();
  }
}

const title = document.getElementById('title');
const author = document.getElementById('author');

const book = new Books(title, author);
book.displayBooks();

const list = document.querySelector('.list-item');
const allSection = document.querySelector('.all');
const inputSection = document.querySelector('.form-data');
const contactUs = document.querySelector('.main-container');
const linksAll = document.querySelector('.links-all');
const linksAdd = document.getElementById('.add');
const copyRight = document.querySelector('.copy-right');
const linksContact = document.querySelector('.links-contact');
const addLink = document.querySelector('.add');
const contactSection = document.querySelector('.main-container');
const contactLink = document.querySelector('.contact-link');

list.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'flex';
  inputSection.style.display = 'none';
  contactUs.style.display = 'none';
  copyRight.style.marginTop = '5%';
  linksAll.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksContact.style.color = 'black';
});
addLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'flex';
  contactSection.style.display = 'none';
  copyRight.style.marginTop = '23%';
  linksAdd.style.color = 'blue';
  linksAll.style.color = 'black';
  linksContact.style.color = 'black';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  allSection.style.display = 'none';
  inputSection.style.display = 'none';
  contactSection.style.display = 'flex';
  copyRight.style.marginTop = '19%';
  linksContact.style.color = 'blue';
  linksAdd.style.color = 'black';
  linksAll.style.color = 'black';
});
