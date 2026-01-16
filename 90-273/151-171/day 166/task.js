const nums = [2, 1, 2, 5, 3, 2];

var repeatedNTimes = function (nums) {
  let repeatObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (repeatObj[nums[i]] !== undefined) {
      return nums[i];
    }
    repeatObj[nums[i]] = true;
  }
};

const result = repeatedNTimes(nums);
console.log(result);
