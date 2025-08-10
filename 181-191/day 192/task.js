let nums = [3, 4, 5, 6, 1, 2];

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return nums[left];
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return nums[left];
  }
}

const solution = new Solution();
const result = solution.findMin(nums);

console.log(result);
