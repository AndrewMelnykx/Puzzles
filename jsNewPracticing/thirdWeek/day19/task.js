let nums = [4, 4, 5];

var findErrorNums = function (nums) {
  let correctArr = [];
  let doubleNum = 0;
  let replacement = doubleNum;
  for (let i = 1; i < nums.length + 1; i++) {
    correctArr.push(i);
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      doubleNum = nums[i + 1];
    }
  }
  if (nums[doubleNum + 2] > nums[doubleNum]) {
    replacement = doubleNum - 1;
  } else {
    replacement = doubleNum + 1;
  }
  return [doubleNum, replacement];
};

let output = findErrorNums(nums);
console.log(output);
