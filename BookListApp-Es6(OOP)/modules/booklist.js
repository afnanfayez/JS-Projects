export default class BookList {
  #container;
  constructor(selector){
    this.#container = document.getElementById(selector);
  }

  append(...bookElements){
    this.#container.append(...bookElements);
  }

  remove(bookId){
    const el = this.#container.querySelector(
    `[data-id="${bookId}"]`);
    el.parentElement.remove();
  }

  clearInputs() {
    document.getElementById("book-name").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-description").value = "";
  }
}
