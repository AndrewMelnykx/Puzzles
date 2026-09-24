let intervals = [
  [3, 4],
  [2, 3],
  [1, 2],
];

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
// var findRightInterval = function (intervals) {
//   let result = [];
//   for (let i = 0; i < intervals.length; i++) {
//     if (intervals[i][1] <= intervals[i + 1][0]) {
//       result.push(i);
//     } else {
//       result.push(-1);
//     }
//   }
//   return result;
// };

var findRightInterval = function (intervals) {
  const n = intervals.length;
  const result = Array(n).fill(-1);

  // store [start, originalIndex]
  const starts = intervals.map((itv, i) => [itv[0], i]);
  starts.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < n; i++) {
    let end = intervals[i][1];

    // binary search
    let left = 0,
      right = n - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (starts[mid][0] >= end) {
        result[i] = starts[mid][1];
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return result;
};

let result = findRightInterval(intervals);
console.log(result);
