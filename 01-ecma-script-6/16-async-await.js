function getCoffee(seed) {
  return new Promise((resolve, reject) => {
    const seeds = seed;

    setTimeout(() => {
      if (seeds >= 10) {
        resolve("coffee didapatkan!");
      } else {
        reject("biji kopi habis!");
      }
    }, 2_000);
  });
}

function getCoff(seed) {
  return new Promise((resolve, reject) => {
    const seeds = seed;

    setTimeout(() => {
      if (seeds >= 10) {
        resolve("coffee didapatkan!");
      } else {
        reject("biji kopi habis!");
      }
    }, 2_000);
  });
}

// * menggunakan keyword async/await
async function makeCoffee() {
  try {
    const coff = await getCoff(20);
    const coffee = await getCoffee(20);
    console.log(coff);
    console.log(coffee);
  } catch (rejectReason) {
    console.log(rejectReason);
  }
}

makeCoffee();
