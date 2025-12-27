let nums = [3, 2, 3];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = {};
  let result = [];
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  for (let key in map) {
    if (map[key] > n / 3) {
      result.push(Number(key));
    }
  }
  return result;
};

let result = majorityElement(nums);
console.log(result);
