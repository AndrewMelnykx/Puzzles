const nums = [2, 1, 2, 5, 3, 2];

var repeatedNTimes = function (nums) {
  let repeated = {};
  for (let i = 0; i < nums.length; i++) {
    if (repeated[nums[i]] !== undefined) {
      return nums[i];
    }
    repeated[nums[i]] = true;
  }
};
const result = repeatedNTimes(nums);
console.log(result);
