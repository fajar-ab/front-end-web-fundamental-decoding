function People(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

// * menambah itroMySelf ke People
People.prototype.introMySelf = function () {
  setTimeout(() => {
    console.log(`hello! nama saya ${this.name}, umur saya ${this.age} tahun`);
    console.log(`hoby saya adalah ${this.hobby}`);
  });
};

const programer = new People("fajar", 21, ["makan", "tidur"]);
programer.introMySelf();
