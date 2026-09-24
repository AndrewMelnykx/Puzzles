let nums = [1, 2, 3, 1];
let k = 3;

var containsNearbyDuplicate = function (nums, k) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined && i - obj[nums[i] <= k]) {
      return true;
    }
    obj[nums[i]] = i;
  }
};

const output = containsNearbyDuplicate(nums, k);
console.log(output);
