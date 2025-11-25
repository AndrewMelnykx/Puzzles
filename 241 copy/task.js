let arr = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
];

var luckyNumbers = function (matrix) {
  let result = [];
  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      result.push(row[i]);
    }
  }
  return result;
};

let result = luckyNumbers(arr);

console.log(result);
