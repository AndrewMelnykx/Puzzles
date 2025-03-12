let nums = [1, 2, 3, 1, 2, 3];
let k = 2;

var containsNearbyDuplicate = function (nums, k) {
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        result[i] = nums[j];
      }
    }
  }
  //   for (let key in result) {
  //     arrayResults.push(result[key] + " " + key);
  //   }
  return result++;
};

const output = containsNearbyDuplicate(nums, 2);
console.log(output);
