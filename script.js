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