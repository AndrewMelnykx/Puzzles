var x = "test";
var y = function func() {
  console.log("func");
};

if (y) {
  x += typeof y;
}

console.log(x);
