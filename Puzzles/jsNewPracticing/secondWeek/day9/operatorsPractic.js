function A() {
  console.log("A");
  return false;
}
function B() {
  console.log("B");
  return true;
}
function C() {
  console.log("C");
  return 5;
}
function D() {
  console.log("D");
  return 2;
}

console.log(C() > D() && (undefined || B() || A()));
