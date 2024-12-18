let myLibrary = [];

// function Book(author, title, num_of_pages, read) {
//   this.author = author;
//   this.title = title;
//   this.num_of_pages = num_of_pages;
//   this.read = read;
// }

class Book {
  constructor(author, title, num_of_pages, read) {
    this.author = author;
    this.title = title;
    this.num_of_pages = num_of_pages;
    this.read = read;
  }
}

let addBook = document.querySelector(".new_book");
addBook.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
  let arr = [];
  let author_prompt = prompt("What's the author of the book?:");
  arr.push(author_prompt);
  let title_prompt = prompt("Title of the book?:");
  arr.push(title_prompt);
  let num_of_pages_prompt = prompt("How many pages does it have?:");
  arr.push(num_of_pages_prompt);
  let read_prompt = confirm("Have you read the book?:");
  arr.push(read_prompt);
  let current_book = new Book(arr[0], arr[1], arr[2], arr[3]);
  renderBook(current_book);
}

function renderBook(book) {
  let card = document.createElement("div");
  card.className = "card";
  let author = document.createElement("p");
  author.className = "author";
  author.textContent = "Author: " + book.author;
  let title = document.createElement("p");
  title.className = "title";
  title.textContent = "Title: " + book.title;
  let number_of_pages = document.createElement("p");
  number_of_pages.className = "number_of_pages";
  number_of_pages.textContent = "Number of Pages: " + book.num_of_pages;
  let read = document.createElement("p");
  read.className = "read";
  read.textContent = "Finished reading?: ";
  if (book.read === true) {
    read.textContent += "Yes";
  } else {
    read.textContent += "No";
  }
  let deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    card.remove();
  });
  let editButton = document.createElement("button");
  editButton.className = "editButton";
  editButton.textContent = "Edit";
  let clickState = 1;
  let editAuthor = document.createElement("button");
  editAuthor.className = "editAuthor";
  editAuthor.textContent = "Edit Author";
  editAuthor.addEventListener("click", () => {
    book.author = prompt("What's the author of the book?:", book.author);
    author.textContent = "Author: " + book.author;
    author.appendChild(editAuthor);
  });
  let editTitle = document.createElement("button");
  editTitle.className = "editTitle";
  editTitle.textContent = "Edit Title";
  let editNumber_of_pages = document.createElement("button");
  editNumber_of_pages.className = "editNumber_of_pages";
  editNumber_of_pages.textContent = "Edit number of pages";
  let editRead = document.createElement("button");
  editRead.className = "editRead";
  editRead.textContent = "Change";
  editButton.addEventListener("click", () => {
    clickState++;
    if (clickState % 2 === 0) {
      editButton.textContent = "Save";
      author.appendChild(editAuthor);
      title.appendChild(editTitle);
      number_of_pages.appendChild(editNumber_of_pages);
      read.appendChild(editRead);
    } else {
      editButton.textContent = "Edit";
      editAuthor.remove();
      editTitle.remove();
      editNumber_of_pages.remove();
      editRead.remove();
    }
  });
  card.appendChild(author);
  card.appendChild(title);
  card.appendChild(number_of_pages);
  card.appendChild(read);
  card.appendChild(deleteButton);
  card.appendChild(editButton);
  document.body.appendChild(card);
}
