let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let k = 1;

// var shiftGrid = function (grid, k) {
//   let arr = grid.flat();
//   let last = arr.length;
//   let copy = [];

//   for (let i = last - k; i < arr.length; i++) {
//     copy.push(arr[i]);
//   }
//   let rev = arr.reverse();
//   let res = rev.slice(k);
//   for (let i = 0; i < copy.length; i++) {
//     res.push(copy[i]);
//   }
//   let final = [];
//   let cols = grid[0].length;
//   for (let i = 0; i < res.length; i += cols) {
//     final.push(res.reverse().slice(i, i + cols));
//   }
//   return final;
// };

var shiftGrid = function (grid, k) {
  let m = grid.length; // rows
  let n = grid[0].length; // cols
  let arr = grid.flat(); // flatten to 1D
  let len = arr.length;

  // Reduce k without using modulo
  while (k >= len) {
    k = k - len;
  }

  // Perform rotation
  let shifted = arr.slice(-k).concat(arr.slice(0, len - k));

  // Rebuild into 2D
  let result = [];
  for (let i = 0; i < len; i += n) {
    result.push(shifted.slice(i, i + n));
  }

  return result;
};

let result = shiftGrid(grid, k);

console.log(result);
