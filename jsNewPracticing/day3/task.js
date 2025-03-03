// let nums = [2, 7, 11, 15];
// let target = 9;

// const result = [];

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] == target) {
//       result.push(i, j);
//     }
//   }
// }
// console.log(result);

const returnUnique = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        result.push(nums[j]);
      }
    }
  }
  return result;
};

const resultOutput = returnUnique([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(resultOutput);
