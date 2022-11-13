//Array that contains books being added
let myLibrary = [];

//Class that contains all functional aspects of Book object
class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }

    createReadStatus() {
        if (document.getElementById('newRead').checked) {
            return  'Yes';
        } else {
            return 'No';
        }
    }

    changeReadStatus() {
        if (currentStatus === 'Yes'){
            currentStatus = 'No';
        } else if ( currentStatus === 'No'){
            currentStatus = 'Yes';
        }
    }

    addBookToLibrary(book) {
        myLibrary.push(book);
        return myLibrary;
    }

    cardGen() {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookCardAuthor = document.createElement('div');
        bookCardAuthor.textContent = `Author: ${newAuthor.value}`;
        bookCard.append(bookCardAuthor);

        const bookCardTitle = document.createElement('div');
        bookCardTitle.textContent = `Title: ${newTitle.value}`;
        bookCard.append(bookCardTitle);

        const bookCardPages = document.createElement('div');
        bookCardPages.textContent = `Number of Pages: ${newPages.value}`;
        bookCard.append(bookCardPages);

        const bookCardRead = document.createElement('div');
        let currentStatus = newBook.createReadStatus();
        bookCardRead.textContent = `Read: ${currentStatus}`;
        bookCard.append(bookCardRead);

        const bookCardDel = document.createElement('button');
        bookCardDel.classList.add('book-del-btn');
        bookCardDel.textContent = 'Delete';
        bookCard.append(bookCardDel);

        const bookCardEdit = document.createElement('button');
        bookCardEdit.classList.add('book-edit-btn');
        bookCardEdit.textContent = 'Change Read Status';
        bookCard.append(bookCardEdit);

        bookCardDel.addEventListener('click', function(event){
            let index = bookCard.getAttribute('data-index');
            console.log(index);
            myLibrary.splice(index, 1);
            const currentCard = document.querySelector(`[data-index="${index}"]`);
            currentCard.remove();
        });

        bookCardEdit.addEventListener('click', function(event) {
            if (bookCardRead.textContent === "Read: Yes"){
                bookCardRead.textContent = "Read: No"
            } else if (bookCardRead.textContent === "Read: No"){
                bookCardRead.textContent = "Read: Yes";
            }
        });

        bookCardsContainer.append(bookCard);

        for (let i = 0; i < myLibrary.length; i++) {
            bookCard.setAttribute('data-index', i);
        }
    }
}

//Form that collects all info regarding the book being added
const form = document.getElementById('form');

//Container that houses all books within the page
const bookCardsContainer = document.querySelector('.book-cards-container');

//Event listener that will trigger the addition of a new book to both the myLibrary array and all visual DOM elements reflected to the user
form.addEventListener('submit', function(event){
    event.preventDefault()

    const newAuthor = document.getElementById('newAuthor').value;
    const newTitle = document.getElementById('newTitle').value;
    const newPages = document.getElementById('newPages').value;
    const newRead = document.getElementById('newRead').value;

    newBook = new Book(newAuthor, newTitle, newPages, newRead);

    newBook.addBookToLibrary(newBook);

    newBook.cardGen();

    return newBook;
});
