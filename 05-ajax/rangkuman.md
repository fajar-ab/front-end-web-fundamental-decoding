# Rangkuman Asynchronous JavaScript And XML

- **Apa itu AJAX**
  - AJAX merupakan singkatan dari Asynchronous JavaScript And XML.
  - AJAX adalah sebuah teknik pemrograman halaman web yang dibangun dengan kompleks dan dinamis menggunakan teknologi yang dikenal dengan XMLHttpRequest.
  - AJAX memungkinkan halaman web terbarui tanpa terjadinya proses ulang memuat halaman web. Inilah yang biasanya diterapkan ketika kita membangun aplikasi web SPA (Single Page App).
  - Konsep AJAX adalah membuat sebuah HTTP Request. HTTP Request adalah proses yang terjadi ketika client mengirimkan request kepada server untuk menyediakan aset atau berkas yang dibutuhkan untuk diproses ke client. Hasil yang diterima oleh client dari server merupakan HTTP Response.
- **Web API**
  - Web API merupakan interface yang disediakan oleh penyedia data agar dapat dikonsumsi oleh berbagai macam platform bahkan perangkat.
  - Web API bekerja menggunakan salah satu pola standar yang dinamakan REST (Representational State Transfer). Data yang diterima atau dikirimkan pada pola REST dapat berupa text, JSON atau XML.
  - Terdapat banyak tipe atau method dalam implementasinya. Namun, hanya empat method yang biasanya digunakan:
    - GET: Melakukan request data atau meminta informasi dari Web API.
    - POST: Melakukan request ke Web API untuk menambahkan data baru.
    - PUT: Melakukan request ke Web API untuk mengubah data yang tersedia.
    - DELETE: Melakukan request ke Web API untuk menghapus data yang tersedia.
- CORS
  - CORS merupakan mekanisme berbasis HTTP Header yang memungkinkan server untuk menunjukkan alamat aslinya (domain, skema, atau port) selain dari alamat server itu sendiri dari client atau browser mana yang diizinkan untuk mengakses sumber dayanya.
- **JSON**
  - JSON merupakan singkatan JavaScript Object Notation.
  - JSON merupakan format yang sering digunakan dalam pertukaran data. Saat ini JSON banyak digunakan karena berbasis teks dan relatif mudah dibaca.
  - Struktur JSON terbentuk dari dua literal data, yakni obyek dan array.
  - Selain itu, JSON mendukung beberapa tipe data:
    - String
    - Number
    - Boolean
    - Null
    - Object
    - Array
- **AJAX menggunakan XHR**
  - XMLHttpRequest atau XHR merupakan class atau blueprint yang bertugas membuat HTTP Request menggunakan JavaScript.
  - Terdapat beberapa callback atau event yang biasa digunakan:
    - onload: Dijalankan ketika request berhasil diproses
    - onerror: Dijalankan ketika request gagal untuk diproses
    - onreadystatechange: Digunakan atau dijalankan ketika properti readyState dari obyek XHR berubah.
  - Terdapat juga beberapa function penting yang perlu diterapkan ketika menggunakan XHR:
    - open(): Digunakan untuk menentukan HTTP Method dan URL yang dituju.
    - send(): Untuk mengirimkan request ke server. Method ini juga berguna untuk menyematkan data ke body request.
    - setRequestHeader(): Digunakan untuk menambahkan HTTP Header pada request yang dikirimkan.
  - Tidak hanya file JSON yang dapat dikirim, tetapi dokumen yang ter-serialized seperti Blob, BufferSource, FormData, URLSearchParam, ReadableStream atau USVString object. Jika tidak terdapat value yang dikirimkan melalui body request, nilai null-lah yang digunakan.
- **AJAX menggunakan Fetch**

  - Fetch merupakan cara baru dalam membuat network request dengan lebih mudah tanpa membuat instance dari suatu class.
  - Fetch memanfaatkan promise untuk mengatasi asyncronous proccess sehingga mengurasi penerapan callback. Selain itu, Fetch dapat dituliskan dengan gaya syncronous menggunakan async/await.
  - Dalam penerapannya, network request dilakukan pada saat fungsi fetch tereksekusi. URL yang dituju dituliskan sebagai parameter pada fungsi tersebut.
  - Secara default, fetch menggunakan method request GET jika secara eksplisit tidak kita tetapkan.
  - Jika request berhasil diproses, fetch akan mengembalikan promise resolve atau fulfilled dan membawa response object di dalamnya, sedangkan jika request gagal diproses, fetch akan mengembalikan promise rejected dan response object bersamanya.
  - Jika HTTP Request yang dikirimkan menggunakan fetch perlu menambahkan informasi pada HTTP Header, kita dapat melakukannya di dalam sebuah object dan diberikan sebagai parameter kedua dari fungsi fetch. Properti-properti yang dapat ditambahkan:
    - method: Menentukan method request yang dikirimkan
    - headers: Menyematkan HTTP Header yang dibutuhkan.
    - body: Membawa data ke body request

- **Berikut beberapa status kode yang dapat dihasilkan dari HTTP Response pada Web API.**
  - 200 (OK) : Request berhasil dipenuhi oleh server (Web API).
  - 400 (Bad Request) : Server tidak mengerti request yang dikirimkan client.
  - 401 (Unauthorized) : Request membutuhkan authorization.
  - 403 (Forbidden) : Server mengerti request dari client namun menolak untuk memprosesnya karena request tersebut tidak boleh dilakukan.
  - 404 (Not Found) : Resource yang client minta, tidak ditemukan.
  - 500 (Server Error) : Server mengalami kendala untuk memproses request

Contoh jika kita ingin mengakses API yang bersumber dari google.com/api, maka kita sebagai client perlu menjadi google.com. Jika kita berasal dari domain yang berbeda, contohnya bing.com, maka kita tidak dapat menggunakan AJAX pada google.com/api. Hal ini dikenal sebagai same-origin policy.

Namun, jika memang Web API tersebut diperbolehkan untuk dikonsumsi umum berarti penyedia data harus menerapkan teknologi yang dinamakan CORS (Cross-Origin Resource Sharing) pada server-nya. Server yang menyediakan Web API menggunakan CORS dapat digunakan secara umum dan mengelakkan kebijakan same-origin guna mengakses informasi yang ada di dalamnya.
