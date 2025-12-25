let nums = [3, 2, 1, 5, 6, 4];
let k = 2;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     map[i] = nums[i];
//   }
//   for (let key in map) {
//     if (map[key] === k) {
//       //   return Number(key);
//     }
//   }
//   return map;
// };

var findKthLargest = function (nums, k) {
  const target = nums.length - k;

  function quickSelect(left, right) {
    // RANDOM pivot index
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

    const pivot = nums[right];
    let p = left;

    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];
        p++;
      }
    }

    [nums[p], nums[right]] = [nums[right], nums[p]];

    if (p === target) return nums[p];
    if (p < target) return quickSelect(p + 1, right);
    return quickSelect(left, p - 1);
  }

  return quickSelect(0, nums.length - 1);
};

let result = findKthLargest(nums, k);
console.log(result);
