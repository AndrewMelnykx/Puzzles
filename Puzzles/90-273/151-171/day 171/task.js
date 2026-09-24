let nums = [3, 4, 5, 6];
let target = 7;

class Solution {
  //   /**
  //    * @param {number[]} nums
  //    * @param {number} target
  //    * @return {number[]}
  //    */
  twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i !== j && nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

let solution = new Solution();
let result = solution.twoSum(nums, target);

console.log(result);
