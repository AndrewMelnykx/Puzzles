let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let k = 1;

var uniqueOccurrences = function (arr) {
  let freq = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  let counts = Object.values(freq);
  return counts.length === new Set(counts).size;
};

var shiftGrid = function (grid, k) {
  let m = grid.length;
  let n = grid[0].length;
  let arr = grid.flat();
  let len = arr.len;

  while (k >= len) {
    k = k - len;
  }

  let shifted = arr.slice(-k).concat(arr.slice(0, len - k));

  let result = [];

  for (let i = 0; i < len; i += n) {
    result.push(shifted.slice(i, i + n));
  }
  return result;
};
let result = shiftGrid(grid, k);

console.log(result);
