var findMaxConsecutiveOnes = function (nums) {
  let consecutiveLength = 0;
  let resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      consecutiveLength += 1;
    } else {
      if (consecutiveLength > 0) {
        resultArr.push(consecutiveLength);
      }
      consecutiveLength = 0;
    }
  }

  if (consecutiveLength > 0) {
    resultArr.push(consecutiveLength);
  }

  return resultArr.length > 0 ? Math.max(...resultArr) : 0;
};

const result = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log(result);
