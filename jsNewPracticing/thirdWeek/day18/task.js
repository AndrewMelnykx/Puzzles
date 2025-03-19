let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = {};
  let resultArray = [];

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
  } else if (resultArray.length === 1) {
    return [0, 0];
  } else {
    return [-1, -1];
  }
};

let output = searchRange(nums, target);

console.log(output);
