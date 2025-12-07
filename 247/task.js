let arr = [1, 2, 4];

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  let result = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i + 1] - arr[i]);
  }
  return new Set(result).size > 1 ? false : true;
};

let result = canMakeArithmeticProgression(arr);

console.log(result);
