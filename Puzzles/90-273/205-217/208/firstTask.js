let nums = [1, 2, 3];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i]);
    for (let j = 0; j < nums.length - 1; j++) {
      if (result[i] === nums[j]) {
        if (nums[i] === nums[j + 1]) continue;
        result.push([nums[i], nums[j + 1]]);
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (Array.isArray(result[i])) continue;
    result[i] = [result[i]];
  }
  return [[], ...result, [...nums]];
};

var subsets = function (nums) {
  let result = [];

  function backtrack(start, current) {
    result.push([...current]);
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
};

let result = subsets(nums);
console.log(result);
