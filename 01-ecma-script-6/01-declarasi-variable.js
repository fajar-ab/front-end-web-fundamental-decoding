function makeTea(isCold) {
  if (isCold) {
    var tea = "Me and Ice Tea!";
  } else {
    var tea = "Make a Hot Tea!";
  }
  return tea;
}

console.log(makeTea(false));

// kasus hoisting
function getFoot() {
  foot = "choocolate";
  console.log(foot);
  var foot;
}

getFoot();
