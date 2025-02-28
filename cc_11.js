// Creating a Book Class 
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
    updatesCopies(quantity){ // to show the amount of copies of the book on hand 
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
