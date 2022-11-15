function sayHello(name = "stanger", greet = "hello") {
  console.log(`${greet} ${name}`);
}

sayHello("fajar", "horas");
sayHello();

const ucapkanSalam = (name = "stanger", greet = "hello") => {
  console.log(`${greet} ${name}`);
};

ucapkanSalam("fajar", "horas");
ucapkanSalam();
