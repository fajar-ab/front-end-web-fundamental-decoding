function arabicaOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("kopi arabika selesai!");
    }, 4_000);
  });
}

function robustaOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("kopi robusta selesai!");
    }, 2_000);
  });
}

function libericaOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("kopi liberica selesai!");
    }, 3_000);
  });
}

Promise.all([arabicaOrder(), robustaOrder(), libericaOrder()]).then(
  (resolvedValue) => {
    console.log(resolvedValue);
  }
);
