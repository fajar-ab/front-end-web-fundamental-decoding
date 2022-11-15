function main() {
  const baseURL = "https://books-api.dicoding.dev";

  const getBook = () => {
    // tuliskan kode di sini!

    // membuat instance object XML Http Request
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const responJson = JSON.parse(xhr.responseText);

      if (responJson.error) {
        showResponseMessage(responJson.message);
      } else {
        renderAllBooks(responJson.books);
      }
    };

    xhr.open("GET", `${baseURL}/list`);
    xhr.send();
  };

  const insertBook = (book) => {
    // tuliskan kode di sini!

    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const responJson = JSON.parse(xhr.responseText);
      showResponseMessage(responJson.message);
      getBook();
    };

    xhr.open("POST", `${baseURL}/add`);

    // menambahkan properti pada header reques
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Auth-Token", "12345");

    xhr.send(JSON.stringify(book));
  };

  const updateBook = (book) => {
    // tuliskan kode di sini!

    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const responJson = JSON.parse(xhr.responseText);
      showResponseMessage(responJson.message);
      getBook();
    };

    xhr.onerror = function () {
      showResponseMessage();
    };

    xhr.open("PUT", `${baseURL}/edit/${book.id}`);

    // menambahkan properti pada header reques
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Auth-Token", "12345");

    xhr.send(JSON.stringify(book));
  };

  const removeBook = (bookId) => {
    // tuliskan kode di sini!

    const xhr = new XMLHttpRequest();

    //menetapkan callback jika response sukses dan error
    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);
      showResponseMessage(responseJson.message);
      getBook();
    };

    xhr.onerror = function () {
      showResponseMessage();
    };

    // Membuat DELETE request dan menetapkan target URL
    xhr.open("DELETE", `${baseURL}/delete/${bookId}`);

    // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
    xhr.setRequestHeader("X-Auth-Token", "12345");

    // Mengirimkan request
    xhr.send();
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
