let myLibrary = [];

function Book(author, title, num_of_pages, read) {
  this.author = author;
  this.title = title;
  this.num_of_pages = num_of_pages;
  this.read = read;
}

let addBook = document.querySelector(".new_book");
addBook.addEventListener("click", addBookToLibrary);

let arr = [];

function addBookToLibrary() {
  let author_prompt = prompt("What's the author of the book?:");
  arr.push(author_prompt);
  let title_prompt = prompt("Title of the book?:");
  arr.push(title_prompt);
  let num_of_pages_prompt = prompt("How many pages does it have?:");
  arr.push(num_of_pages_prompt);
  let read_prompt = confirm("Have you read the book?:");
  arr.push(read_prompt);
  let current_book = new Book(arr[0], arr[1], arr[2], arr[3]);
  let author_p = document.querySelector(".author");
  author_p.textContent += current_book.author;
  let title_p = document.querySelector(".title");
  title_p.textContent += current_book.title;
  let number_of_pages_p = document.querySelector(".number_of_pages");
  number_of_pages_p.textContent += current_book.num_of_pages;
  let read_p = document.querySelector(".read");
  if (read_prompt === true) {
    read_p.textContent += "Yes";
  } else {
    read_p.textContent += "No";
  }
}
