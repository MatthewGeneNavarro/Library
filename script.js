let myLibrary = [];

const newbookBtn = document.getElementById('new-book');
const form = document.getElementById('form');
const formSubmit = document.getElementById('form-submit');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

const bookShelf = document.querySelector('.bookshelf');

console.log('end of file');
// Constructor
function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}
// Putting methods in prototype of Book
Book.prototype.info = function() {
    if(this.read === true){
        return `${this.title} by ${this.author}, ${this.pages} pages, has been read`;
    }

    if(this.read === false) {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read`; 
    }
}


// create DOM objects for Book
// Add Styles
// toggle book form
function addBookToLibrary(title, author, pages) {
    let obj = new Book(title,author,pages);
    myLibrary.push(obj);

    let nameOfBook = obj.title;
    let bookDiv = document.createElement('div');
    let removeBookBtn = document.createElement('button');
    let titlep = document.createElement('p');
    let authorp = document.createElement('p');
    let pagesp = document.createElement('p');
    let index = myLibrary.length - 1;

    
    titlep.textContent = title;
    removeBookBtn.textContent = "Remove Book";
    authorp.textContent = author;
    pagesp.textContent = pages;

    removeBookBtn.classList.add("div-btn");
    bookDiv.classList.add('books');
    bookDiv.dataset.arrIndex = index;
    console.log(bookDiv);
    bookDiv.appendChild(titlep);
    bookDiv.appendChild(authorp);
    bookDiv.appendChild(pagesp);
    bookDiv.appendChild(removeBookBtn);
    bookShelf.appendChild(bookDiv);
}

function displayBook(){
    for(let x of myLibrary){
        alert(x.title);
    }
}


newbookBtn.addEventListener('click', ()=>{
    form.classList.remove('hide-form');
    form.classList.add('show-form');
});

formSubmit.addEventListener('click', ()=>{
    addBookToLibrary(title.value, author.value, pages.value);
    form.classList.remove('show-form');
    form.classList.add('hide-form');
});


removeBookBtn.addEventListener('click', ()=>{


})









