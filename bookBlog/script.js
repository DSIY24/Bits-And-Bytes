function searchBooks() {
  var input, filter, books, book, name, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  books = document.getElementById("bookList");
  book = books.getElementsByClassName("book");

  for (i = 0; i < book.length; i++) {
    name = book[i].getAttribute("data-name");
    if (name.toUpperCase().indexOf(filter) > -1) {
      book[i].style.display = "";
    } else {
      book[i].style.display = "none";
    }
  }
}
