var search = function (nums, target) {
  for (let num in nums) {
    if (nums[num] === target) {
      return parseInt(num);
    }
  }
  return -1;
};

const result = search([-1, 0, 3, 5, 9, 12], 9);
console.log(result);
