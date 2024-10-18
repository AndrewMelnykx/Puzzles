var removeElement = function (nums, val) {
  let filteredArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      filteredArr.push(nums[i]);
    }
  }
  for (let i = 0; i < filteredArr.length; i++) {
    nums[i] = filteredArr[i];
  }
  return filteredArr.length;
};
const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(result);
