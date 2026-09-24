let grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;

  for (let item of grid) {
    for (let i = 0; i < item.length; i++) {
      if (item[i] < 0) {
        count++;
      }
    }
  }
  return count;
};

let result = countNegatives(grid);

console.log(result);
