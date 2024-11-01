let myLibrary = [];

function Book(author, title, num_of_pages, read) {
  this.author = author;
  this.title = title;
  this.num_of_pages = num_of_pages;
  this.read = read;
}

let arr = [];

let addBook = document.querySelector(".new_book");
addBook.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
  let author_prompt = prompt("What's the author of the book?:");
  arr.push(author_prompt);
  let title_prompt = prompt("Title of the book?:");
  arr.push(title_prompt);
  let num_of_pages_prompt = prompt("How many pages does it have?:");
  arr.push(num_of_pages_prompt);
  let read_prompt = confirm("Have you read the book?:");
  arr.push(read_prompt);
  console.log(arr);
}
