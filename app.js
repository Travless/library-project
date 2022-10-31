let myLibrary = [];

function Book(author, title, pages,read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readStatus = function(){
    if (document.getElementById('newRead').checked) {
        return  'Yes';
    } else {
        return 'No';
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    return myLibrary;
}

const form = document.getElementById('form');

const bookCardsContainer = document.querySelector('.book-cards-container');

function cardGen(){
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
    const currentStatus = newBook.readStatus();
    bookCardRead.textContent = `Read: ${currentStatus}`;
    bookCard.append(bookCardRead);

    const bookCardDel = document.createElement('button');
    bookCardDel.classList.add('book-del-btn');
    bookCardDel.textContent = 'Delete';
    bookCard.append(bookCardDel);

    const bookCardEdit = document.createElement('button');
    bookCardEdit.classList.add('book-edit-btn');
    bookCardEdit.textContent = 'Edit';
    bookCard.append(bookCardEdit);

    bookCardDel.addEventListener('click', function(event){
        let index = bookCard.getAttribute('data-index');
        console.log(index);
        myLibrary.splice(index, 1);
        const currentCard = document.querySelector(`[data-index="${index}"]`);
        currentCard.remove();
    });

    bookCardsContainer.append(bookCard);

    for (let i = 0; i < myLibrary.length; i++) {
        bookCard.setAttribute('data-index', i);
    }
};

form.addEventListener('submit', function(event){
    event.preventDefault()

    const newAuthor = document.getElementById('newAuthor').value;
    const newTitle = document.getElementById('newTitle').value;
    const newPages = document.getElementById('newPages').value;
    const newRead = document.getElementById('newRead').value;

    newBook = new Book(newAuthor, newTitle, newPages, newRead);

    addBookToLibrary(newBook);

    cardGen();

    return newBook;
});