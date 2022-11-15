class Car {
  constructor(manufactur, color) {
    this.manufactur = manufactur;
    this._color = color;
    this.enginesActice = false;
  }

  // * getter & setter
  get getColor() {
    return this._color;
  }

  set setColor(value) {
    console.log(`color telah diubah dari ${this._color} ke ${value}`);
    this._color = value;
  }

  startEngines() {
    console.log("mobil dinyalakan...");
    this.emginesActive = true;
  }

  info() {
    console.log("namufacture: " + this.manufactur);
    console.log("color      : " + this._color);
    console.log("engines    : %s ", this.emginesActive ? "active" : "inactive");
  }
}

export { Car };
