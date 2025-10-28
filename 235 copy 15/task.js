let nums = [4, 3, 10, 9, 8];

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  const total = nums.reduce((a, b) => a + b, 0);
  const result = [];
  let currSum = 0;

  for (let num of nums) {
    currentSum += num;
    result.push(num);
    if (currentSum > total - currSum) {
      break;
    }
  }
  return result;
};

let result = minSubsequence(nums);

console.log(result);
