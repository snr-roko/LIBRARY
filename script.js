const main_page = document.getElementsByTagName('main')[0];
const new_book = document.querySelector('#new');
const dialog_form = document.querySelector('dialog');
const form = document.querySelector('form');
const myLibrary = [];

new_book.addEventListener('click', () => {
  dialog_form.showModal();
})


form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(form.checkValidity()) {
    dialog_form.close();
    const data = new FormData(form);
    let name = data.get('name');
    let author = data.get('author');
    let pages = data.get('pages');
    let rating = data.get('rating');

    const newBook = new Book(name, author, pages, rating);
    myLibrary.push(newBook);

    form.reset();
    addBookToLibrary();
  } else {
    form.reportValidity();
  }
})

function Book(name, author, pages, ratings) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.rating = ratings;

}



function addBookToLibrary() {
  // resetting the main page
  main_page.innerHTML = '';
  // check whether main is empty
  if(myLibrary.length !== 0) {
    
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
    let book_ratings= document.createElement('div');

    // book name line
    let book_name_name = document.createElement('span');
    book_name_name.textContent = book.name;
    book_name.appendChild(book_name_name);
    book_name.style.textAlign = "center";
    book_name_name.style.textTransform = "upperCase";
    book_name_name.style.fontSize = "25px";
    book_name_name.style.fontWeight = "700";
    book_name_name.style.color = "white";

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

  // book ratings line
  let book_ratings_state = document.createElement('p');
  book_ratings_state.textContent = 'Rating:';
  let book_ratings_rate = document.createElement('span');
  book_ratings_rate.textContent = book.rating;
  book_ratings.appendChild(book_ratings_state);
  book_ratings.appendChild(book_ratings_rate);

  // book read line
  let book_read_state = document.createElement('p');
  book_read_state.textContent = 'Read:';
  let book_read_name = document.createElement('span');
  book_read.appendChild(book_read_state);

  // Displaying the card on the page
  card.appendChild(book_name);
  card.appendChild(book_author);
  card.appendChild(book_pages);
  card.appendChild(book_ratings);
  card.appendChild(book_read);
  main_page.appendChild(card);
 })
}

addBookToLibrary();
