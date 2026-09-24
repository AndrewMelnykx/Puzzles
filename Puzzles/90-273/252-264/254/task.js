let nums = [1, 3, 100];

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  let maxDif = 0;
  nums.sort();
  nums.reverse();
  if (nums.length < 2) {
    return 0;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let dif = nums[i] - nums[i + 1];
    maxDif = Math.max(maxDif, dif);
  }
  return maxDif;
};

let result = maximumGap(nums);

console.log(result);
