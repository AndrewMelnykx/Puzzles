let nums = [8, 1, 2, 2, 3];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var smallerNumbersThanCurrent = function (nums) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     let j = 1;
//     while (nums[i] > nums[j] && j < nums.length - 1) {
//       if (nums[i] > nums[j]) {
//         j++;
//       }
//       result.push(j);
//     }
//   }
//   return result;
// };
var smallerNumbersThanCurrent = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

let result = smallerNumbersThanCurrent(nums);

console.log(result);
