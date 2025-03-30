let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

var merge = function (intervals) {
  let resultArr = [];
  if (intervals.length <= 1) return intervals;
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] - intervals[i + 1][0] >= 0) {
      intervals[i + 1][0] = intervals[i][0];
      resultArr.push(intervals[i + 1]);
    } else {
      resultArr.push(intervals[i + 1]);
    }
  }

  return resultArr;
};
var merge = function (intervals) {
  let resultArr = [];

  // Edge case: If there is only one or no intervals, return as is
  if (intervals.length <= 1) return intervals;

  // Sort intervals by their start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize resultArr with the first interval
  resultArr.push(intervals[0]);

  // Loop through the rest of the intervals
  for (let i = 1; i < intervals.length; i++) {
    let lastInterval = resultArr[resultArr.length - 1]; // Get the last interval in resultArr
    let currentInterval = intervals[i]; // Get the current interval

    // If the current interval overlaps with the last interval in resultArr
    if (currentInterval[0] <= lastInterval[1]) {
      // Merge intervals by updating the end of the last interval
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    } else {
      // No overlap, so just add the current interval
      resultArr.push(currentInterval);
    }
  }

  return resultArr;
};

let output = merge(intervals);

console.log(output);
