// Task 1- Creating a Book Class 
class Book {
    constructor(title, author, isbn, copies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails(){ // to show the details of the book
        console.log(`${this.title} written by ${this.author} is this number ${this.isbn} and has ${this.copies} many copies.`);
    }
    updateCopies(quantity){ // to show the amount of copies of the book on hand 
        this.copies += quantity;
        if (this.copies < 0 ) {
            this.copies = 0;
        }
    }
}
//Test Cases 
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Task 2- Creating a Borrower Class 

class Borrower {
    constructor(name, borrowerID) {
        this.name = name;
        this.borrowerID = borrowerID;
        this.borrowedBooks = [];
    }
    borrowBook(book) { // adds book
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed "${book.title}"`);
    }
    returnBook(book) { // removes book
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== book.title);
        console.log(`${this.name} returned "${book.title}"`);
    }
}

const borrower1 = new Borrower("Alice Johnson", 201);

borrower1.borrowBook(book1);
console.log(borrower1.borrowedBooks);

borrower1.returnBook(book1);
console.log(borrower1.borrowedBooks);

// Task 3- Creating a Library Class 

class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) { //puts new book in library 
        this.books.push(book);
    }
    listBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN:${book.ISBN}, Copies: ${book.copies}`);
        });
    }
}
//Test Cases 
const library = new Library();
library.addBook(book1);
library.listBooks();

// Task 4 

addBorrower(borrower1)
    this.borrowers.push(borrower1);


lendBook(borrowerID, isbn) 
    const book = this.books.find(book => book.isbn === isbn);
    const borrower = this.borrowers.find(borrower => Borrower.borrowerID === borrowerID);

    if (book && borrower && book.copies > 0) {
        book.updateCopies(-1);
        Borrower.borrowBook(book.title);
    } else {
        console.log("Unavailable")
    }

library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]