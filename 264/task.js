let nums = [1, 2, 1, 3, 2, 5];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let map = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  for (let key in map) {
    if (map[key] === 1) {
      result.push(Number(key));
    }
  }
  return result;
};

let result = singleNumber(nums);
console.log(result);
