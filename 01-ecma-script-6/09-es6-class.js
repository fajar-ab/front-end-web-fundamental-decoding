class Car {
  constructor(manufactur, color) {
    this.manufactur = manufactur;
    this.color = color;
    this.enginesActice = false;
  }

  // * sama dengan Car.prototype.info
  startEngines() {
    console.log("mobil dinyalakan...");
    this.emginesActive = true;
  }

  info() {
    console.log("namufacture: " + this.manufactur);
    console.log("color      : " + this.color);
    console.log("engines    : %s ", this.emginesActive ? "active" : "inactive");
  }
}

export { Car };
