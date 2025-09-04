let nums = [3, -1, 0, 2];
let k = 3;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let mins = [];
  let res = [];
  k = k - mins.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      mins.push(nums[i]);
    } else {
      res.push(nums[i]);
    }
  }
  for (let i = 0; i < mins.length; i++) {
    res.push(Math.abs(mins[i]));
  }
  let sorted = nums.sort((a, b) => a - b);
  if (k % 2 !== 0) {
    sorted[0] = Math.abs(-sorted[0]);
  }

  return res.reduce((s, t) => s + t, 0);
};
var largestSumAfterKNegations = function (nums, k) {
  // Step 1: sort ascending
  nums.sort((a, b) => a - b);

  // Step 2: flip negatives
  for (let i = 0; i < nums.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  // Step 3: if k is still odd, flip the smallest element
  nums.sort((a, b) => a - b); // re-sort to find smallest
  if (k % 2 === 1) {
    nums[0] = -nums[0];
  }

  // Step 4: sum
  return nums.reduce((s, t) => s + t, 0);
};

let nums = [3, -1, 0, 2];
let k = 3;
console.log(largestSumAfterKNegations(nums, k)); // 6

let result = largestSumAfterKNegations(nums, k);

console.log(result);
