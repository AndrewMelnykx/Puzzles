let nums = [1, 12, -5, -6, 50, 3, 7];
let k = 4;

var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;
  for (let i = 4; i < nums.length - 1; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }
};

let output = findMaxAverage(nums, k);

console.log(output);
