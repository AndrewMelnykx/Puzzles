function f(a, b = () => console.log(a)) {
  var a = 1;
  console.log(a);
  b();
}
f(2);
