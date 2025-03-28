let nums = [2, 3, 1, 1, 4];

var jump = function (nums) {
  let last = nums.length - 1;
  let currentEnd = 0;
  let jumps = 0;
  let maxEnd = currentEnd;
  let start = nums[0];
  for (let i = 0; i < start; i++) {
    start = Math.max(start, nums[i]);
  }
  for (let i = maxEnd; i < last; i++) {
    currentEnd += start;
    currentEnd += Math.max(nums[i], nums[maxEnd]);
    jumps++;
  }
  return jumps;
};

let output = jump(nums);
console.log(output);
