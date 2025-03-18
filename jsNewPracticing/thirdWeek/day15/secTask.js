let nums = [1, 4, 3, 2];

// var arrayPairSum = function (nums) {
//   let pairs = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (pairs[nums[i]] === undefined) {
//       pairs[nums[i]] = i;
//     }
//   }

//   for (key in pairs) {
//     let value = pairs[key];
//     if()
//   }
//   return pairs;
// };

var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

let output = arrayPairSum(nums);

console.log(output);
