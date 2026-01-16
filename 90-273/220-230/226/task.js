let nums = [12, 345, 2, 6, 7896];

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = [];
  let str = nums.join(" ").split(" ");
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    res.push(str[i].length);
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] % 2 === 0) {
      counter++;
    }
  }
  return counter;
};

var findNumbers = function (nums) {
  let counter = 0;

  for (let num of nums) {
    if (num.toString().length % 2 === 0) {
      counter++;
    }
  }

  return counter;
};

var findNumbers = function (nums) {
  let counter = 0;
  for (let num of nums) {
    if (num.toString().length % 2 === 0) {
      counter++;
    }
  }
  return counter;
};

let result = findNumbers(nums);

console.log(result);
