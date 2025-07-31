let nums = [-1, 0, 2, 4, 6, 8];
let target = 4;

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] !== target) {
        left++;
      } else if (nums[right] !== target) {
        right--;
      }
    }
    if (nums[left] === target) {
      return left;
    } else {
      return -1;
    }
  }
}

//GPR SOLUTION

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1; // not found
  }
}
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}

let solution = new Solution();
let result = solution.search(nums, target);
console.log(result);
