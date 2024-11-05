var moveZeroes = function (nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[zeroCount] = nums[i];
      zeroCount++;
    }
  }
  for (let i = zeroCount; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
