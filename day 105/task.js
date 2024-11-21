var dominantIndex = function (nums) {
  const theMax = Math.max(...nums);
  const maxIndex = nums.indexOf(theMax);
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && nums[i] * 2 > theMax) {
      return -1;
    }
  }
  return maxIndex;
};

const result = dominantIndex([3, 6, 1, 0]);
console.log(result);
