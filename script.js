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
 
// Book Class
class Book {
  constructor(name, author, pages, ratings) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.rating = ratings;
  }
}

function addBookToLibrary() {
  // resetting the main page
  main_page.innerHTML = '';
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
    let book_delete = document.createElement('div');

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
  let read_toggle_button = document.createElement('button');
  read_toggle_button.style.background = 'inherit';
  read_toggle_button.style.border = "none";
  read_toggle_button.style.cursor = "pointer";
  read_toggle_button.classList.add('off');
  let read_toggle_off = createSVGIcon("M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120Z");
  read_toggle_button.appendChild(read_toggle_off);
  book_read.appendChild(book_read_state);
  book_read.appendChild(read_toggle_button);

// Toggles the read svg icon to off and on
let read_toggle_on;
  read_toggle_button.addEventListener('click', () => {
    if(read_toggle_button.classList.contains('off')) {
      read_toggle_button.classList.remove('off');
      read_toggle_button.classList.add('on');
      read_toggle_button.removeChild(read_toggle_off);
      read_toggle_on = createSVGIcon("M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm400-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM480-480Z");
      read_toggle_on.style.fill = "yellow";
      read_toggle_button.appendChild(read_toggle_on);      
        } else {
          read_toggle_button.classList.remove('on');
          read_toggle_button.classList.add('off');
          read_toggle_button.removeChild(read_toggle_on);
          read_toggle_button.appendChild(read_toggle_off);    
          }    
  })

  // book delete line
  let book_delete_button = document.createElement('button');
  let book_delete_icon = createSVGIcon("M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z");
  book_delete_icon.style.fill = 'red';
  book_delete_button.style.background = 'inherit';
  book_delete_button.style.border = "none";
  book_delete_button.style.cursor = "pointer";  
  book_delete_button.appendChild(book_delete_icon);
  book_delete.appendChild(book_delete_button);

 // Deleting card when delete button is clicked
 book_delete_button.addEventListener('click', () => {
  main_page.removeChild(card);
})

  // Displaying the card on the page
  card.appendChild(book_name);
  card.appendChild(book_author);
  card.appendChild(book_pages);
  card.appendChild(book_ratings);
  card.appendChild(book_read);
  card.appendChild(book_delete);
  main_page.appendChild(card);
 })


}

// Creating an svg Icon
function createSVGIcon(path_data) {
  let svgNS = "http://www.w3.org/2000/svg";
  let svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('xlmns', svgNS );
  svg.setAttribute('height', '40px');
  svg.setAttribute('viewBox', "0 -960 960 960");
  svg.setAttribute('width', '40px');
  svg.setAttribute('fill', "white");

  let path_d = path_data;
  let path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', path_d);

  svg.appendChild(path);

  return svg;

}




addBookToLibrary();
