let nums = [1, 2, 3, 1];

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function (nums) {
//   let peak = 0;
//   if (nums.length <= 2 && nums[0] < nums[1]) {
//     return 1;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > nums[i + 1]) {
//       peak = i;
//     } else {
//       continue;
//     }
//   }
//   return peak;
// };

var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
};

let result = findPeakElement(nums);

console.log(result);
