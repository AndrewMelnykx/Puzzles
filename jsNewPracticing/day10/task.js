let arr = [4, 1, 2, 1, 2];

var singleNumber = function (nums) {
  let results = {};
  for (let i = 0; i < nums.length; i++) {
    if (results[nums[i]]) {
      results[nums[i]] += 1;
    } else {
      results[nums[i]] = 1;
    }
    for (let key in results) {
      if (results[key] === 1) {
        return key;
      }
    }
  }
};
let arr1 = [4, 1, 2, 1, 2];

var singleNumber2 = function (nums) {
  let result = 0; // Start with 0
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]; // XOR each element with the result
  }
  return result; // This will be the number that appears once
};

console.log(singleNumber2(arr1)); // This should return 4

console.log(singleNumber(arr));
