let nums = [1, 2, 4, 6];

// class Solution {
//   /**
//    * @param {number[]} nums
//    * @return {number[]}
//    */
//   productExceptSelf(nums) {
//     let total = nums[0];
//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//       total *= nums[i];
//     }
//     for (let i = 1; i < nums.length; i++) {
//       res.push(total - nums[i] * nums[i + 1]);
//     }
//     return res;
//   }
// }

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const numsLength = nums.length;
    const res = Array(numsLength).fill(1);

    let left = 1;
    for (let i = 0; i < numsLength; i++) {
      res[i] = left;
      left *= nums[i];
    }

    let right = 1;
    for (let i = numsLength - 1; i >= 0; i--) {
      res[i] *= right;
      right *= nums[i];
    }
    return res;
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */

  productExceptSelf(nums) {
    const numsLength = nums.length;
    const resultArr = Array(numsLength).fill(1);

    let left = 1;
    for (let i = 0; i < numsLength; i++) {
      resultArr[i] = left;
      left *= nums[i];
    }
    let right = 1;
    for (let i = numsLength - 1; i >= 0; i--) {
      resultArr[i] *= right;
      right *= nums[i];
    }
    return resultArr;
  }
}
let solution = new Solution();

let result = solution.productExceptSelf(nums);

console.log(result);
