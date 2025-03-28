let nums = [5, 5, 1, 1, 4, 2, 7, 9];

var jump = function (nums) {
  let jumps = 0;
  let farthest = 0;
  let currentEnd = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
    if (currentEnd >= nums.length - 1) break;
  }
  return jumps;
};

let output = jump(nums);
console.log(output);
