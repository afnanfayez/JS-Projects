// === Book.js ===
export default class Book {
  constructor(bookValues) {
    this.obj = bookValues;
  }

  create() {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    bookItem.setAttribute("id", `bookId-${this.obj.uniqueId}`);

    const bookTitle = document.createElement("h3");
    const bookDesc = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookDeleteButton = document.createElement("button");
    bookDeleteButton.dataset.id = this.obj.uniqueId;

    bookTitle.textContent = this.obj.title;
    bookDesc.textContent = this.obj.description;
    bookAuthor.textContent = `By: ${this.obj.author}`;
    bookDeleteButton.textContent = "Delete";
    bookDeleteButton.classList.add("delete-btn");

    bookItem.append(bookTitle, bookDesc, bookAuthor, bookDeleteButton);

    return bookItem;
  }

  isValidDescription() {
    return this.obj.description.split(" ").length >= 5;
  }
}

