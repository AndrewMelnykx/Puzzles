// var plusOne = function (digits) {
//   const digitsNum = digits.join("");
//   return (Number(digitsNum) + 1).toString().split("").map(Number);
// };

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
const result = plusOne([4, 3, 2, 1]);
console.log(result);
