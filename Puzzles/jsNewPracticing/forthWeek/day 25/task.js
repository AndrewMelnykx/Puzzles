let nums = [1, 2, 3];

var permute = function (nums) {
  let resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    resultArr.push([...nums]);
  }
  return resultArr;
};
// gpt solution
var permute = function (nums) {
  let resultArr = [];
  const backtrack = (currentPermutation, remainingNums) => {
    if (remainingNums.length === 0) {
      resultArr.push([...currentPermutation]);
      return;
    }
    for (let i = 0; i < remainingNums.length; i++) {
      currentPermutation.push(remainingNums[i]);
      backtrack(
        currentPermutation,
        remainingNums.filter((_, index) => index !== i)
      );
      currentPermutation.pop();
    }
  };
  backtrack([], resultArr);
  return resultArr;
};

let output = permute(nums);
console.log(output);
