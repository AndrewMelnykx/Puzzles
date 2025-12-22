let nums = [1, 2, 3, 1];

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var rob = function (nums) {
//   let res = nums[nums.length - 1];
//   for (let i = nums.length - 2; i > 0; i--) {
//     res += nums[i - 1];
//   }
//   return res;
// };

var rob = function (nums) {
  let prev1 = 0;
  let prev2 = 0;

  for (let money of nums) {
    let curr = Math.max(prev1, prev2 + money);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
};

let result = rob(nums);

console.log(result);
