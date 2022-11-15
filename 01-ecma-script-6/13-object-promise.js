// *  resolver function atau bisa disebut executor function
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = false;

  if (isCoffeeMakerReady) {
    resolve("☕ kopi berhasil dibuat");
  } else {
    reject("⏳ mesin kopi tidak bisa digunakan");
  }
};

// * handle callback
const handlerSuccess = (resolveValue) => {
  console.log(resolveValue);
};

const handlerRejected = (rejectionReason) => {
  console.log(rejectionReason);
};

const coffee = new Promise(executorFunction);
coffee.then(handlerSuccess).catch(null, handlerRejected);
