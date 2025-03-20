let nums = [1];
let target = 1;

var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = {};
  let resultArray = [];

  if (resultArray.length === 1) {
    resultArray[0] === 0;
    resultArray[1] === 0;
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left++;
      if (nums[left] === target) {
        result[left] = target;
      }
    } else {
      if (nums[mid] >= target) {
        right--;
        if (nums[right] === target) {
          result[right] = target;
        }
      }
    }
  }
  for (let key in result) {
    resultArray.push(parseInt(key));
  }

  if (resultArray.length > 1) {
    return resultArray;
  } else {
    return [-1, -1];
  }
};
let output = searchRange(nums, target);

console.log(output);
