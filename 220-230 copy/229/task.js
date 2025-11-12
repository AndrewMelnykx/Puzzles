let arr = [17, 18, 5, 4, 6, 1];

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let biggest = Math.max(...arr);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === biggest) {
      result.push(arr[i]);
      arr[i] = 0;
      biggest = Math.max(...arr);
    }
  }
  return result;
};

var replaceElements = function (arr) {
  let maxRight = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = maxRight;
    maxRight = Math.max(maxRight, temp);
  }
  return arr;
};

let result = replaceElements(arr);
console.log(result);
