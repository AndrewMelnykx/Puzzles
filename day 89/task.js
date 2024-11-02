var majorityElement = function (nums) {
  let numsCount = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    numsCount[num] = (numsCount[num] || 0) + 1;
    if (numsCount[num] > Math.floor(nums.length / 2)) {
      return numsCount;
    }
  }
};
let result = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(result);
