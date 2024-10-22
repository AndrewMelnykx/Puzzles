var singleNumber = function (nums) {
  let numsResult = [];
  let numCount = {};

  // Count frequency of each number
  for (let i = 0; i < nums.length; i++) {
    if (numCount[nums[i]]) {
      numCount[nums[i]] += 1;
    } else {
      numCount[nums[i]] = 1;
    }
  }

  // Push only the numbers that appear once into numsResult
  for (let i = 0; i < nums.length; i++) {
    if (numCount[nums[i]] === 1) {
      numsResult.push(nums[i]);
    }
  }

  return numsResult;
};

const result = singleNumber([4, 1, 2, 1, 2]);
console.log(result);
