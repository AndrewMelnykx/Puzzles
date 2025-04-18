let numRows = 6;

// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);
  }
  return result;
};

var degenerate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(row);
  }
  return result;
};

const output = degenerate(numRows);

console.log(output);
