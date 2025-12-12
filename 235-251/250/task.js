let nums = [2, 2, 3, 2];

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  for (let key in map) {
    if (map[key] === 1) {
      return Number(key);
    }
  }
};

let result = singleNumber(nums);

console.log(result);
