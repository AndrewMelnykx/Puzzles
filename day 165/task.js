let strs = ['cba', 'daf', 'ghi'];

var minDeletionSize = function (strs) {
  let columns = [];
  let resultArr = [];
  let matchCount = 0;

  for (let col = 0; col < strs[0].length; col++) {
    let column = [];
    for (let row = 0; row < strs.length; row++) {
      column.push(strs[row][col]);
    }
    columns.push(column);
  }

  const alphabetPositions = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    let columnValues = [];
    for (let j = 0; j < column.length; j++) {
      let letter = column[j];
      let value = alphabetPositions[letter];
      columnValues.push(value);
    }
    resultArr.push(columnValues);
  }
  for (let i = 0; i < resultArr.length; i++) {
    for (let j = 1; j < resultArr[i].length; j++) {
      if (resultArr[i][j - 1] > resultArr[i][j]) {
        matchCount++;
        break;
      }
    }
  }
  return matchCount;
};

//GPT SOLUTION TO WRITE
function minDeletionSize(strs) {
  let deleteCount = 0;
  const numRows = strs.length;
  const numCols = strs[0].length;

  for (let col = 0; col < numCols; col++) {
    for (let row = 1; row < numRows; row++) {
      if (strs[row][col] < strs[row - 1][col]) {
        deleteCount++;
        break; // Stop checking this column, it's not sorted
      }
    }
  }

  return deleteCount;
}

const result = minDeletionSize(strs);
console.log(result);
