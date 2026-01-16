let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let firstThreeSum = grid[0].reduce((t, i) => t + i, 0);
  let rightSum = 0;

  for (let i = 1; i < grid.length; i++) {
    rightSum += grid[i][grid[i].length - 1];
  }
  return rightSum + firstThreeSum;
};

var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let j = 1; j < n; j++) grid[0][j] += grid[0][j - 1];
  for (let i = 1; i < m; i++) grid[i][0] += grid[i - 1][0];

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[m - 1][n - 1];
};

let result = minPathSum(grid);
console.log(result);
