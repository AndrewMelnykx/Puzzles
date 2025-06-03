let nums = [3, 1, 2, 4];

var sortArrayByParity = function (nums) {
  let odd = [];
  let even = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      odd.push(nums[i]);
    } else {
      even.push(nums[i]);
    }
  }
  return [...even, ...odd];
};
// GPT SOLUTION
// var sortArrayByParity = function (nums) {
//   return nums
//     .filter((n) => n % 2 === 0)
//     .concat(nums.filter((n) => n % 2 !== 0));
// };

let result = sortArrayByParity(nums);
console.log(result);
