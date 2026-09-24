const x = function (a, b = 3) {
  console.log(arguments[0] + "" + arguments[1]);
  arguments[0] = 4;
  console.log(a);
  console.log(b);
};
x(1, 2);
