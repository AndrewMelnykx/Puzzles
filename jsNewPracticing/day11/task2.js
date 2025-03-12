//It has to return the smallest num of the 3 elements like 5,1,3 will be 1 and 1,3,2, 1
//output [1,1,2,2,1,1,1,2,3]

let arr = [5, 1, 3, 2, 4, 6, 1, 7, 3, 2, 8];

// function lessOfClosesThree(nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         result.push(Math.min(nums[i], nums[j], nums[k]));
//       }
//     }
//   }
//   return result;
// }
function lessOfClosesThree(nums) {
  let result = [];
  // Loop until there's a complete group of 3 elements
  for (let i = 0; i <= nums.length - 3; i++) {
    // Get the minimum of the current sliding window of 3 elements
    result.push(Math.min(nums[i], nums[i + 1], nums[i + 2]));
  }
  return result;
}

const output = lessOfClosesThree(arr);

console.log(output);
