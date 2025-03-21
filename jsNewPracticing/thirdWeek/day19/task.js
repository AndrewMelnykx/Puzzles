let nums = [4, 4, 5];

var findErrorNums = function (nums) {
  let repeated = [];
  let answerArr = [];
  //   let doubleNum = 0;
  //   let replacement = 0;
  let counter = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      repeated.push(nums[i], i);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    answerArr.push(i + nums[0]);
  }
  return answerArr;
};

let output = findErrorNums(nums);
console.log(output);
