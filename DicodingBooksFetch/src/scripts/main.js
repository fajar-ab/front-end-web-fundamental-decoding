function main() {
  const BASE_URL = "https://books-api.dicoding.dev";

  const getBook = () => {
    const options = { method: "GET" };

    fetch(`${BASE_URL}/list`, options)
      .then((response) => response.json())
      .then((response) => {
        response.error
          ? showResponseMessage(response.message)
          : renderAllBooks(response.books);
      })
      .catch((err) => showResponseMessage(err));
  };

  const insertBook = (book) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Auth-Token": "12345" },
      body: JSON.stringify(book),
    };

    fetch(`${BASE_URL}/add`, options)
      .then((response) => response.json())
      .then((response) => {
        showResponseMessage(response.message);
        getBook();
      })
      .catch((err) => showResponseMessage(err));
  };

  const updateBook = (book) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Auth-Token": "12345" },
      body: JSON.stringify(book),
    };

    fetch(`${BASE_URL}/edit/${book.id}`, options)
      .then((response) => response.json())
      .then((response) => {
        showResponseMessage(response.message);
        getBook();
      })
      .catch((err) => showResponseMessage(err));
  };

  const removeBook = (bookId) => {
    const options = {
      method: "DELETE",
      headers: { "X-Auth-Token": "12345" },
    };

    fetch(`${BASE_URL}/delete/${bookId}`, options)
      .then((response) => response.json())
      .then((response) => {
        showResponseMessage(response.message);
        getBook();
      })
      .catch((err) => showResponseMessage(err));
  };

  /*
      jangan ubah kode di bawah ini ya!
  */

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector("#listBook");
    listBookElement.innerHTML = "";

    books.forEach((book) => {
      listBookElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h5>(${book.id}) ${book.title}</h5>
              <p>${book.author}</p>
              <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
            </div>
          </div>
        </div>
      `;
    });

    const buttons = document.querySelectorAll(".button-delete");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const bookId = event.target.id;

        removeBook(bookId);
      });
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const inputBookId = document.querySelector("#inputBookId");
    const inputBookTitle = document.querySelector("#inputBookTitle");
    const inputBookAuthor = document.querySelector("#inputBookAuthor");
    const buttonSave = document.querySelector("#buttonSave");
    const buttonUpdate = document.querySelector("#buttonUpdate");

    buttonSave.addEventListener("click", function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      insertBook(book);
    });

    buttonUpdate.addEventListener("click", function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      updateBook(book);
    });
    getBook();
  });
}

export default main;
