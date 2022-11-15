function Car(manufactur, color) {
  this.manufactur = manufactur;
  this.color = color;
  this.emginesActive = false;
}

Car.prototype.startEngines = function () {
  console.log("mobil dinyalakan...");
  this.emginesActive = true;
};

Car.prototype.info = function () {
  console.log("namufacture: " + this.manufactur);
  console.log("color      : " + this.color);
  console.log("engines    : %s ", this.emginesActive ? "active" : "inactive");
};

const car = new Car("honda", "red");
car.info();
car.startEngines();
car.info();
