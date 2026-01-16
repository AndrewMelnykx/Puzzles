// let nums = [4, 4, 5];
let nums = [1, 2, 2, 4];

var findErrorNums = function (nums) {
  let targetIndex = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      targetIndex = i;
    }
  }
  if (nums[targetIndex] < nums[targetIndex + 2]) {
    return [nums[targetIndex], nums[targetIndex + 1] + 1];
  } else {
    return [nums[targetIndex] - 1, nums[targetIndex]];
  }
};

let output = findErrorNums(nums);
console.log(output);
