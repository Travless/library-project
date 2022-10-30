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
        bookCardRead.textContent = `Read: ${newRead.value}`;
        bookCard.append(bookCardRead);

        const bookCardDel = document.createElement('button');
        bookCardDel.classList.add('book-del-btn');
        bookCardDel.textContent = 'Delete';
        bookCard.append(bookCardDel);
    
        bookCardsContainer.append(bookCard);

        for (let i = 0; i < myLibrary.length; i++) {
            bookCard.setAttribute('data-index', i);
        }
};

const bookDeleteButton = document.querySelector('.book-del-btn');

form.addEventListener('submit', function(event){
    event.preventDefault()

    const newAuthor = document.getElementById('newAuthor').value;
    const newTitle = document.getElementById('newTitle').value;
    const newPages = document.getElementById('newPages').value;
    const newRead = document.getElementById('newRead').value;

    const newBook = new Book(newAuthor, newTitle, newPages, newRead);

    addBookToLibrary(newBook);

    cardGen();
});

// bookCardDel.addEventListener("click", function(event){
//     console.log(myLibrary.prototype.findIndex());
// })

function deleteBook() {
    let index = this.getAttribute('data-index');
    console.log(index);
};

bookDeleteButton.addEventListener('click', function(event){
    deleteBook();
});

