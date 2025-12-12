let nums = [1, 2, 3, 1, 1, 3];

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};

var numIdenticalPairs = function (nums) {
  let freq = {};
  let count = 0;

  for (let n of nums) {
    if (freq[n]) {
      count += freq[n]; // all previous same elements form a pair with this one
      freq[n]++;
    } else {
      freq[n] = 1;
    }
  }

  return count;
};

let result = numIdenticalPairs(nums);

console.log(result);
