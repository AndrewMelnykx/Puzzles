let nums = [1, 2, 2, 3];

// var isMonotonic = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < nums[i + 1] || nums[i] < nums[i - 1]) {
//       return true;
//     }
//     return false;
//   }
// };

var isMonotonic = function (nums) {
  let inc = true;
  let dec = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) dec = false;
    if (nums[i] < nums[i - 1]) inc = false;
  }
  return inc || dec;
};
let result = isMonotonic(nums);

console.log(result);
