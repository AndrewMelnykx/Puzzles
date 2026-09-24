let nums = [1, 2, 3, 4];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let n = i;
    if (n % 2 !== 0) {
      n + 2;
    } else {
      n + 1;
    }
    let newArr = new Array(i).fill(n);
    result.push(...newArr);
  }
  result.shift();
  result.shift();

  return result;
};

var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    let val = nums[i + 1];

    result.push(...new Array(freq).fill(val));
  }
  return result;
};

let result = decompressRLElist(nums);

console.log(result);
