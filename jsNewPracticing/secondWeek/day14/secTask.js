let nums = [1, 4, 3, 2];

// var arrayPairSum = function (nums) {
//   let pairs = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       pairs.push({ first: nums[i], second: nums[j] });
//     }
//   }
//   let hashArr = new Set(pairs);

//   return hashArr.size;
// };

var arrayPairSum = function (nums) {
  let pairs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      // Create a unique string key for each pair
      let key = `${nums[i]}-${nums[j]}`;
      pairs.push(key);
    }
  }

  // Use a Set to ensure unique keys
  let hashArr = new Set(pairs);

  return hashArr.size;
};

let output = arrayPairSum(nums);

console.log(output); // Should now give the correct count of unique pairs
