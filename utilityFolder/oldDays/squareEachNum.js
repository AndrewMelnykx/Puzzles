// function squareDigits(num) {
//   return num
//     .toString()
//     .split("")
//     .map((number) => number * number);
// }
// const result = squareDigits(12);
// console.log("dl", result);

// function squareDigits(num) {
//   //   const squaredNums = num.toString().split('').map(n=>n*n);
//   const squaredNums = num
//     .toString()
//     .split("")
//     .map((n) => n * n);
//   const stringFromSquared = squaredNums.forEach((n) => console.log(n));
//   return stringFromSquared;
// }

// const result = squareDigits(333);
// console.log(result);

function squareDigits(num) {
  const squareNums = num
    .toString()
    .split("")
    .map((n) => parseInt(n) * n);
  const numberFromSquared = parseInt(squareNums.join(""));
  return numberFromSquared;
}
