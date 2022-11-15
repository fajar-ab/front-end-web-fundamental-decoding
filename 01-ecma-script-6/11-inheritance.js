class Vehicle {
  constructor(licensePlate, manufacture) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.engineActive = false;
  }

  startEngine() {
    console.log(`mesin kendaraan ${this.licensePlate} dinyalakan...`);
    this.engineActive = true;
  }

  info() {
    console.log(`nomor kendaraan: ${this.licensePlate}`);
    console.log(`manufacture    : ${this.manufacture}`);
    console.log(
      `mesin          : ${this.engineActive ? "active" : "inactive"}`
    );
  }

  parking() {
    console.log(`kendaraan ${this.licensePlate} parkir!`);
  }
}

// * class Car mewarisi parent class Vehicle
class Car extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    super(licensePlate, manufacture);
    this.wheels = wheels;
  }

  dropOff() {
    console.log(`kendaraan ${this.licensePlate} melaju!`);
  }

  openDoor() {
    console.log("membuka pintu!");
  }

  // overriding method info dari parent class
  info() {
    super.info();
    console.log(`jumlah roda    : ${this.wheels}`);
  }
}

class VehicleFactory {
  static repair(vehicles) {
    vehicles.forEach((vehicle) =>
      console.log(
        `kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`
      )
    );
  }
}

export { Car, VehicleFactory };
