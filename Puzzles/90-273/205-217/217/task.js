let arr = [3, 8, -10, 23, 19, -4, -14, 27];

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let sorted = arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  let result = [];

  for (let i = 1; i < sorted.length; i++) {
    let diffN = arr[i];
    let prevDiff = arr[i - 1];
    let differ = Math.abs(diffN - prevDiff);
    minDiff = Math.min(minDiff, differ);
  }

  for (let i = 1; i < sorted.length; i++) {
    let diffN = arr[i];
    let prevDiff = arr[i - 1];
    let differ = Math.abs(diffN - prevDiff);

    if (differ <= minDiff) {
      result.push([prevDiff, diffN]);
    }
  }
  return result;
};

let result = minimumAbsDifference(arr);

console.log(result);

var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];

    if (diff < minDiff) {
      minDiff = diff;
      result = [[arr[i - 1], arr[i]]];
    } else if (diff === minDiff) {
      result.push([arr[i - 1], arr[i]]);
    }
  }

  return result;
};
