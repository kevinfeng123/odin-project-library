let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
    console.log(`${book.title} has been pushed into the library`);
}

//addBookToLibrary(book2);

//manually added test cases
let book1 = new Book("Harry Potter", "JK Rowling", 430, "yes");
let book2 = new Book("Ugly Caterpiller", "Kevin", 123, "yes");
let book3 = new Book("Yummy Yogurt", "Mike Tyson", 221, "no");
let book4 = new Book("Sizzling Eggs", "George Washington", 98, "no");
myLibrary = [book1, book2 ,book3, book4];

//console.log(myLibrary);

//select the wrapper for books
const bookWrap = document.querySelector('book-wrap');


let addBookToPage = (library) => {
    for (book of library){
 
        //create book card element to store book information
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.textContent = `Title: ${book.title} Author: ${book.author} Pages: ${book.pages} Read?: ${book.read}`;
        console.log('test');

        bookWrap.append(bookCard);

    }
}

addBookToPage(myLibrary);
