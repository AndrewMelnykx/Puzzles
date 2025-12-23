let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let island = 0;
  let nums = grid.map(row => row.map(cell => Number(cell)));
  for (let i = 0; i < grid.length; i++) {
    let col = grid[i];
    for (let j = 0; j < col.length; i++) {
      let row = col[j];
      if (row === 1 && j !== col.length && col[i][j] === 1) {
        continue;
      } else {
        island++;
      }
    }
  }
  return island;
};

var numIslands = function (grid) {
  let islands = 0;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === "0") {
      return;
    }

    grid[r][c] = "0"; // mark visited

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        islands++;
        dfs(i, j);
      }
    }
  }

  return islands;
};

let result = numIslands(grid);

console.log(result);
