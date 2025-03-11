let arr = [1, 2, 3, 1];

//My solution
var containsDuplicate = function (nums) {
  const filteredNums = new Set(nums);
  if (filteredNums.size === nums.length) {
    return false;
  }
  return true;
};

//GPT Solution
var containsDuplicate = function (nums) {
  const filteredNums = new Set(nums);
  return filteredNums.size !== nums.length;
};

console.log(containsDuplicate(arr));
