import Book from "./modules/book.js";
import BookList from "./modules/booklist.js";
import Storage from "./modules/storage.js";


// === DOM Elements ===
const bookForm = document.getElementById("book-form");
const nameInput = document.getElementById("book-name");
const nameAuthor = document.getElementById("book-author");
const descriptionInput = document.getElementById("book-description");

const container = document.getElementById("books-container");

const bookList = new BookList('books-container');
const storage = new Storage('books');

// === Event Listeners ===
document.addEventListener("DOMContentLoaded", () => {
  const list = storage.getBooks();
  const bookelements = list.map((item) => {
    const book = new Book(item);
    return book.create();
  });
  bookList.append(...bookelements);
});

bookForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  const values = {
    uniqueId:Math.random(),  
    title: nameInput.value,
    author: nameAuthor.value,
    description: descriptionInput.value,
  };

  const book = new Book(values);
  if(!book.isValidDescription()){
    alert("Wrong description");
    return;
  }

  storage.save(book.obj);
  const bookEl = book.create();
  bookList.append(bookEl);

  bookList.clearInputs();
});

const inputs = document.querySelectorAll("input");
for (let input of inputs) {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      bookForm.dispatchEvent(new Event("submit"));
    }
  });
}

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const bookId = e.target.dataset.id;
    bookList.remove(bookId);
    storage.removeBook(bookId);
  }
});

