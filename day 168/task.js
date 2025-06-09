let num = [1, 2, 0, 0];
let k = 34;

var addToArrayForm = function (num, k) {
  let sum = BigInt(num.join("")) + BigInt(k);
  return sum.toString().split("").map(Number);
};

let result = addToArrayForm(num, k);

console.log(result);
