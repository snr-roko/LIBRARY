const main_page = document.getElementsByTagName('main')[0];
const new_book = document.querySelector('#new');
const dialog_form = document.querySelector('dialog');
const close_dialog = document.querySelector('#close-dialog');
const form = document.querySelector('form');
const myLibrary = [
  {
    name: 'The Hobbit',
    author: 'JK Rowling',
    pages: 450,
    read: 'Yes'
  }

];

new_book.addEventListener('click', () => {
  dialog_form.showModal();
})


form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(form.checkValidity()) {
    dialog_form.close();
  } else {
    form.reportValidity();
  }
})

// function Book(name, author, pages, read) {
//   // the constructor...
//   this.name = name;
//   this.author = author;
//   this.pages = pages;
//   this.read = read.toLowerCase() === 'yes' ? 'Read' : 'Not Read yet';
//   this.info = () => `${this.name} by ${this.author}, ${this.pages}, ${this.read}`;
// }



function addBookToLibrary() {
  // check whether main is empty
  if(myLibrary.length === 0) {
    
  }
  // displaying each book
  myLibrary.forEach((book) => {
    let card = document.createElement('div');
    card.className = "card-container";
  // divs for each line of the card
    let book_name = document.createElement('div');
    let book_author = document.createElement('div');
    let book_pages = document.createElement('div');
    let book_read = document.createElement('div');

    // book name line
    let book_name_state = document.createElement('p');
    book_name_state.textContent = 'Name:';
    let book_name_name = document.createElement('span');
    book_name_name.textContent = book.name;
    book_name.appendChild(book_name_state);
    book_name.appendChild(book_name_name);

    // book author line
    let book_author_state = document.createElement('p');
    book_author_state.textContent = 'Author:';
    let book_author_name = document.createElement('span');
    book_author_name.textContent = book.author;
    book_author.appendChild(book_author_state);
    book_author.appendChild(book_author_name);

    // book pages line
  let book_pages_state = document.createElement('p');
  book_pages_state.textContent = 'Pages:';
  let book_pages_name = document.createElement('span');
  book_pages_name.textContent = book.pages;
  book_pages.appendChild(book_pages_state);
  book_pages.appendChild(book_pages_name);

  // book read line
  let book_read_state = document.createElement('div');
  book_read_state.textContent = 'Read:';
  let book_read_name = document.createElement('span');
  book_read_name.text_Content = book.read;
  book_read.appendChild(book_read_name);
  book_read.appendChild(book_read_state);

  // Displaying the card on the page
  card.appendChild(book_name);
  card.appendChild(book_author);
  card.appendChild(book_pages);
  card.appendChild(book_read);
  main_page.appendChild(card);
 })
}

addBookToLibrary();
