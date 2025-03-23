let nums = [1, 3, 5, 4, 7, 3, 12, 15, 18, 25];

var findLengthOfLCIS = function (nums) {
  let count = 1;
  let maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    maxLength = Math.max(maxLength, count);
  }
  return maxLength;
};

let output = findLengthOfLCIS(nums);
console.log(output);
