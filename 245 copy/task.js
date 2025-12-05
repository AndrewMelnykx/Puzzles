let nums = [1, 2, 3, 4];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function (nums) {
//   let re = [];
//   let res = nums.reduce((n, t) => re.push(n + t));
//   return re;
// };

var runningSum = function (nums) {
  return nums.reduce((acc, curr) => {
    acc.push((acc.length > 0 ? acc[acc.length - 1] : 0) + curr);
    return acc;
  }, []);
};

let result = runningSum(nums);

console.log(result);
