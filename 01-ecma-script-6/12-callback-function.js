function getCake(callback) {
  let cake = null;
  console.log("sedang membuat kue, silakan tunggu...");

  setTimeout(() => {
    cake = "kue selesai!";
    callback(cake);
  }, 3000);
}

getCake((cake) => {
  console.log(cake);
});
