const myLibrary = [];

function Book(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(author, title, pages, read) {
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
}
function printBooks() {
  document.getElementById("library").innerHTML = "";
  for (x = 0; x < myLibrary.length; x++) {
    const bookElement = document.createElement("div");
    let checked;

    bookElement.innerHTML =
      "<div class='libraryElement'><h2>" +
      myLibrary[x].title +
      "</h2><div><i>" +
      myLibrary[x].author +
      "</i></div><div>" +
      myLibrary[x].pages +
      " pages</div><div>Read: <input type='checkbox' id='' " +
      myLibrary[x].read +
      " ></div><button onClick='removeBook(" +
      x +
      ")'><b>Delete</b></i></button></div>";
    document.getElementById("library").appendChild(bookElement);
  }
}
function removeBook(position) {
  myLibrary.splice(position, 1);
  printBooks();
}

function formadd(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read");
  let readsend;
  if (read.checked) {
    readsend = "checked";
  } else {
    readsend = "uncheck";
  }
  addBookToLibrary(name, author, pages, readsend);

  printBooks();
  document.getElementById("form").reset();
}

addBookToLibrary("A", "E", 32, "checked");
printBooks();
