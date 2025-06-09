let nums = [2, 1, 2];

var sortedSquares = function (nums) {
  let newArr = nums.map(n => n * n).sort((a, b) => a - b);
};

let result = sortedSquares(nums);
console.log(result);
