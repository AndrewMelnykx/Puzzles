let arr = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
];

var luckyNumbers = function (matrix) {
  let columns = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let colArr = [];
    for (let j = 0; j < matrix.length; j++) {
      colArr.push(matrix[j][i]);
    }
    columns.push(colArr);
  }

  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    let rowMin = Math.min(...matrix[i]);
    for (let j = 0; j < matrix[i].length; j++) {
      let colMax = Math.max(...columns[j]);
      if (matrix[i][j] === rowMin && matrix[i][j] === colMax) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
};

let result = luckyNumbers(arr);

console.log(result);
