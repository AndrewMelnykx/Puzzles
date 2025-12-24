let target = 7,
  nums = [2, 3, 1, 2, 4, 3];

// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minSubArrayLen = function (target, nums) {
//   nums.sort((a, b) => a - b);
//   nums.reverse();
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     target -= nums[i];
//     count++;
//     if (target <= 0) {
//       return count;
//     }
//   }
//   return 0;
// };

var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

let result = minSubArrayLen(target, nums);
console.log(result);
