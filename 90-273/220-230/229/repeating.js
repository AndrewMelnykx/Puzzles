var shiftGrid = function (grid, k) {
  let m = grid.length;
  let n = grid[0].length;

  let arr = grid.flat();

  while (k >= length) {
    k = k - length;
  }
  let shifted = arr.slice(-k).concat(arr.slice(0, len - k));

  let result = [];

  for (let i = 0; i < length; i += n) {
    result.push(shifted.slice(i, i + n));
    return result;
  }
};

var findNumbers = function (nums) {
  let counter = 0;
  for (let num of nums) {
    if (num.toString().length % 2 === 0) {
      counter++;
    }
  }
  return counter;
};
