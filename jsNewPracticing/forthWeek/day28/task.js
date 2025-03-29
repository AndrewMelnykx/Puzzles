let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

let output = maxSubArray(nums);

console.log(output);
