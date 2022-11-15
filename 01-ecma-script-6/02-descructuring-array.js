const favofites = ["lontong", "tempe", "kopi", "rokok"];
const [, , third] = favofites;

console.log(third);

// swap tanpa desctucturing
let a = 1,
  b = 2,
  temp;

console.log(`
sebelum di swap
nilai a: ${a}
nilai b: ${b}
`);

temp = a;
b = a;
a = temp;

console.log(`
sebelum di swap
nilai a: ${a}
nilai b: ${b}
`);

// swap dengan destructuring
let c = 1,
  d = 2;

console.log(`
sebelum di swap
nilai a: ${c}
nilai b: ${d}
`);

[c, d] = [d, c];

console.log(`
sebelum di swap
nilai a: ${c}
nilai b: ${d}
`);
