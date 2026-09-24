let nums = [1, 2, 3, 4];
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        product *= nums[j];
      }
    }
    result.push(product);
  }
  return result;
};

let result = productExceptSelf(nums);

console.log(result);
