let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

//create flip read state function for Book

Book.prototype.flipRead = function(){
    if (this.read === "yes"){
        this.read = "no";
    } else{
        this.read = "yes";
    }
}

//manually added test cases
let book1 = new Book("Harry Potter", "JK Rowling", 430, "yes",0);
let book2 = new Book("Ugly Caterpiller", "Kevin", 123, "yes",1);
let book3 = new Book("Yummy Yogurt", "Mike Tyson", 221, "no",2);
let book4 = new Book("Sizzling Eggs", "George Washington", 98, "no",3);
myLibrary = [book1, book2 ,book3, book4];


//select the wrapper for books
const bookWrap = document.querySelector('.book-wrap');


let addBookToPage = (library) => {
    let i = 0; //index of book

    for (book of library){
 
        //create book card element to store book information
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookCardTitle = document.createElement('div');
        bookCardTitle.classList.add('book-title');
        bookCardTitle.textContent = `Title: ${book.title}`;

        const bookCardAuthor = document.createElement('div');
        bookCardAuthor.classList.add('book-author');
        bookCardAuthor.textContent = `Author: ${book.author}`;

        const bookCardPages = document.createElement('div');
        bookCardPages.classList.add('book-pages'); 
        bookCardPages.textContent = `Pages: ${book.pages}`;

        const bookCardRead = document.createElement('div');
        bookCardRead.classList.add('book-read');
        bookCardRead.textContent = `Read?: ${book.read}`;

        const removeBook = document.createElement('button');
        removeBook.classList.add('remove-book-button');
        removeBook.setAttribute("index", i);
        removeBook.textContent = "Remove";


        const readBook = document.createElement('button');
        readBook.classList.add('read-book-button');
        readBook.setAttribute("index", i);
        readBook.textContent = "Read";

        i++; //increment index after setting it

        bookCard.append(bookCardTitle, bookCardAuthor, bookCardPages, bookCardRead, removeBook, readBook);


        //bookCard.textContent = `Title: ${book.title} Author: ${book.author} Pages: ${book.pages} Read?: ${book.read}`;
        console.log(bookCard.textContent);
        console.log("Book added to library");


        bookWrap.append(bookCard);

    }
}

//Updates DOM

let updateLibrary = (library) => {

    //resets page by removing all books
    let bookCards = document.querySelectorAll(".book-card");
    console.log(bookCards);
    for (bookCard of bookCards){
        console.log(bookCard);
        bookCard.remove();
    }

    addBookToPage(myLibrary);

    //adding event listener to buttons
    const removeBookButtonArray = document.querySelectorAll(".remove-book-button");

    for (button of removeBookButtonArray){
        button.addEventListener("click", removeButtonEvent);
    }

    const readBookButtons = document.querySelectorAll(".read-book-button");

    for (button of readBookButtons){
        button.addEventListener("click", toggleRead);
    }
}

//Hide and Unhide form ===========================================

let hideForm = () => {

    const formWrapper = document.querySelector(".form-wrapper");

    if (document.querySelector(".hidden") === null){;
        formWrapper.classList.add("hidden");
    } else {
        formWrapper.classList.remove("hidden");
    }
}


const newBookButton = document.querySelector(".new-book-button");
newBookButton.addEventListener("click", hideForm);


//Creating Remove Book function and button ===========================================

let removeBook = (library, index) => {
    return library.splice(index,1);
}


let removeButtonEvent = (event) => {
    index = event.target.getAttribute("index");
    removeBook(myLibrary, index);

    updateLibrary(myLibrary);

}

//creating toggleRead function

let toggleRead = (event) =>{
    index = event.target.getAttribute("index");
    myLibrary[index].flipRead();
   
    updateLibrary(myLibrary);
}

updateLibrary(myLibrary);


