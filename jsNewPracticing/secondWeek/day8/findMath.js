let num1 = Math.sqrt(-9);
let num2 = Math.sqrt(9);

console.log(num1);

if (num1 + num2 >= 0) {
  console.log("Positive value");
} else if (num1 + num2 < 0) {
  console.log("Negative value");
} else {
  console.log("Not number value");
}
