let nums = [2, 20, 4, 10, 3, 4, 5, 22];

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    nums.sort((a, b) => a - b);
    let count = 1;
    let maxCount = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        continue;
      } else if (nums[i] === nums[i - 1] + 1) {
        count++;
      } else {
        maxCount = Math.max(maxCount, count);
        count = 1;
      }
    }
    return maxCount;
  }
}

let solution = new Solution();

let result = solution.longestConsecutive(nums);
console.log(result);
