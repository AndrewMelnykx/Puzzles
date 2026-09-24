// let nums = [1, 2, 2, 3, 1, 4, 2];
let nums = [2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2];

// var findShortestSubArray = function (nums) {
//   let count = 0;
//   let maxCount = count;
//   let mostFrequentNum = null;
//   let numsMap = {};

//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     numsMap[num] = (numsMap[num] || 0) + 1;
//     // if (numsMap[num] > maxCount) {
//     //   maxCount = numsMap[num];
//     //   mostFrequentNum = num;
//     // }
//   }
//   let indexOfBiggestStart = nums.indexOf(mostFrequentNum);
//   let lastIndexOfBiggest = nums.lastIndexOf(mostFrequentNum);
//   let returned = nums.slice(indexOfBiggestStart, lastIndexOfBiggest + 1);
//   return numsMap;
// };

// GPT SOLUTION , CHECK IT TOMORROW

var findShortestSubArray = function (nums) {
  let numsMap = {};
  let firstIndex = {};
  let lastIndex = {};
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    numsMap[num] = (numsMap[num] || 0) + 1;
    if (firstIndex[num] === undefined) firstIndex[num] = i;
    lastIndex[num] = i;
    maxCount = Math.max(maxCount, numsMap[num]);
  }
  let minSubarrayLength = nums.length;
  for (let num in nums) {
    if (numsMap[num] === maxCount) {
      let length = lastIndex[num] - firstIndex[num] + 1;
      minSubarrayLength = Math.min(minSubarrayLength, length);
    }
  }
  return minSubarrayLength;
};

let output = findShortestSubArray(nums);

console.log(output);
