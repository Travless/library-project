let myLibrary = [];

function Book(author, title, pages,read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    return myLibrary;
}

let book1 = new Book('Stephen King', 'It', 1000, 'Yes');

addBookToLibrary(book1);

const bookCardsContainer = document.querySelector('.book-cards-container');

const addBookBtn = document.getElementById('add-book-btn');

for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookCardAuthor = document.createElement('div');
    bookCardAuthor.textContent = `Author: ${myLibrary[i].author}`;
    bookCard.append(bookCardAuthor);

    const bookCardTitle = document.createElement('div');
    bookCardTitle.textContent = `Title: ${myLibrary[i].title}`;
    bookCard.append(bookCardTitle);

    const bookCardPages = document.createElement('div');
    bookCardPages.textContent = `Number of Pages: ${myLibrary[i].pages}`;
    bookCard.append(bookCardPages);

    const bookCardRead = document.createElement('div');
    bookCardRead.textContent = `Read: ${myLibrary[i].read}`;
    bookCard.append(bookCardRead);

    bookCardsContainer.append(bookCard);
}

