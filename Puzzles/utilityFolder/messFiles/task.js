var missingNumber = function (nums) {
  const rightArr = [];
  for (let i = 0; i < nums.length + 1; i++) {
    rightArr.push(i);
  }

  const sumOfRight = rightArr.reduce((t, n) => t + n, 0);
  const sumOfBasicNums = nums.reduce((t, n) => t + n, 0);
  const needableNum = sumOfRight - sumOfBasicNums;

  return needableNum;
};
const result = missingNumber([3, 0, 1]);
console.log(result);
