var thirdMax = function (nums) {
  const setFromNums = new Set(nums);
  const arrayFromSetNums = Array.from(setFromNums).sort((a, b) => a - b);
  if (arrayFromSetNums.length < 3) {
    return arrayFromSetNums[arrayFromSetNums.length - 1];
  } else {
    return arrayFromSetNums[arrayFromSetNums.length - 3];
  }
};
const result = thirdMax([3, 2, 1]);
console.log(result);
