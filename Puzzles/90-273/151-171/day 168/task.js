let num = [1, 2, 0, 0];
let k = 34;

var addToArrayForm = function (num, k) {
  let sum = BigInt(num.join("")) + BigInt(k);
  return sum.toString().split("").map(Number);
};

//GPT solution
// var addToArrayForm = function (num, k) {
//   const res = [];
//   let i = num.length - 1;

//   while (i >= 0 || k > 0) {
//     if (i >= 0) {
//       k += num[i--]; // add digit and move left
//     }
//     res.push(k % 10); // store least‑significant digit
//     k = Math.trunc(k / 10); // carry the rest
//   }

//   return res.reverse(); // digits were collected right‑to‑left
// };

let result = addToArrayForm(num, k);

console.log(result);
