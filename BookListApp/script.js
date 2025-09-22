// === DOM Elements ===
const bookForm = document.getElementById("book-form");
const nameInput = document.getElementById("book-name");
const nameAuthor = document.getElementById("book-author");
const descriptionInput = document.getElementById("book-description");
const container = document.getElementById("books-container");

// === Event Listeners ===
bookForm.addEventListener("submit", handleSubmit);

const inputs = document.querySelectorAll("input");
for (let input of inputs) {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  });
}

container.addEventListener("click", (e) => {
  if (e.target.classList == "delete-btn") {
    const bookId = e.target.dataset.id;
    const bookElToRemove = document.getElementById(`bookId-${bookId}`);
    bookElToRemove.remove();
    removeFromStorage(bookId);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const storedList = localStorage.getItem("books");
  const parsedList = JSON.parse(storedList) || [];
  const elements = parsedList.map((item) =>
    createBookEl(item.uniqueId, item.title, item.description, item.auther)
  );
  container.append(...elements);
});

// === Functions ===

// Handle form submission
function handleSubmit(e) {
  e.preventDefault();

  const bookObj = captureValues();

  // Validate description length
  if (!isValidDescription(bookObj.description)) {
    alert("Wrong description");
    return;
  }

  // Create book element and add to container
  const bookItem = createBookEl(
    bookObj.uniqueId,
    bookObj.title,
    bookObj.description,
    bookObj.auther
  );
  container.append(bookItem);

  // Save book to localStorage
  saveToStorage(bookObj);

  // Clear input fields
  clearInputs();
}

// Save a new book to localStorage
function saveToStorage(book) {
  const storedList = localStorage.getItem("books");
  const parsedList = JSON.parse(storedList) || [];
  parsedList.push(book);
  const stringifiedList = JSON.stringify(parsedList);
  localStorage.setItem("books", stringifiedList);
}

// Remove a book from localStorage by ID
function removeFromStorage(uniqueId) {
  const storedList = localStorage.getItem("books");
  const parsedList = JSON.parse(storedList) || [];
  const filteredList = parsedList.filter(
    (item) => item.uniqueId !== Number(uniqueId)
  );
  const stringifiedList = JSON.stringify(filteredList);
  localStorage.setItem("books", stringifiedList);
}

// Create a book DOM element
function createBookEl(uniqueId, title, description, auther) {
  const bookItem = document.createElement("div");
  bookItem.classList.add("book-item");
  bookItem.setAttribute("id", `bookId-${uniqueId}`);

  const bookTitle = document.createElement("h3");
  const bookDesc = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookDeleteButton = document.createElement("button");
  bookDeleteButton.dataset.id = uniqueId;

  bookItem.append(bookTitle, bookDesc, bookAuthor, bookDeleteButton);
  bookTitle.textContent = title;
  bookDesc.textContent = description;
  bookAuthor.textContent = `By: ${auther}`;
  bookDeleteButton.textContent = "Delete";
  bookDeleteButton.classList.add("delete-btn");

  return bookItem;
}

// Capture input values and create a book object
function captureValues() {
  const uniqueId = Math.random();
  const title = nameInput.value;
  const auther = nameAuthor.value;
  const description = descriptionInput.value;
  return { uniqueId, title, auther, description };
}

// Validate if description has at least 5 words
function isValidDescription(description) {
  return description.split(" ").length >= 5;
}

// Clear all input fields
function clearInputs() {
  nameInput.value = "";
  nameAuthor.value = "";
  descriptionInput.value = "";
}
