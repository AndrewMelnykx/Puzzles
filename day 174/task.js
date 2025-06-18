let nums = [1, 2, 4, 6];

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

    // let right = 1;
    // for (let i = numsLength - 1; i >= 0; i--) {
    //   res[i] *= right;
    //   right *= nums[i];
    // }
    return res;
  }
}

let solution = new Solution();

let result = solution.productExceptSelf(nums);

console.log(result);
