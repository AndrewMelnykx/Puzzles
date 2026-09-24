let nums = [0, 4, 3, 0, 4];

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var specialArray = function (nums) {
//   nums.sort((a, b) => a - b);
//   nums.reverse();
//   let max = Math.max(...nums);
//   while (max) {
//     let res = [];
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] >= max) {
//         res.push(nums[j]);
//       }
//       if (res.length - 1 <= max) {
//         max--;
//       }
//       if (res.length - 1 === max) {
//         return max;
//       }
//     }
//   }
// };

var specialArray = function (nums) {
  nums.sort((a, b) => b - a); // descending

  for (let x = 0; x <= nums.length; x++) {
    let count = 0;

    for (let num of nums) {
      if (num >= x) count++;
    }

    if (count === x) return x;
  }

  return -1;
};

let result = specialArray(nums);

console.log(result);
