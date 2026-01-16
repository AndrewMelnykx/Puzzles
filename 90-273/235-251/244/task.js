let nums = [3, 4, 5, 2];

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxProduct = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      maxProduct = Math.max(maxProduct, (nums[i] - 1) * (nums[j] - 1));
    }
  }
  return maxProduct;
};

let result = maxProduct(nums);

console.log(result);
