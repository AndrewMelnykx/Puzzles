let intervals = [[1, 5]];
let newInterval = [2, 3];

var insert = function (intervals, newInterval) {
  let resultArr = [];
  if (intervals.length && newInterval <= 1) return [[...newInterval]];

  intervals = [...intervals, newInterval];
  intervals.sort((a, b) => a[0] - b[0]);

  resultArr.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let lastInterval = resultArr[resultArr.length - 1];
    let currentInterval = intervals[i];

    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    } else {
      resultArr.push(currentInterval);
    }
  }
  return resultArr;
};

let output = insert(intervals, newInterval);

console.log(output);

// GPT SOLUTION
var insert = function (intervals, newInterval) {
  let resultArr = [];
  let i = 0,
    n = intervals.length;

  // Add all intervals that come before newInterval
  while (i < n && intervals[i][1] < newInterval[0]) {
    resultArr.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  resultArr.push(newInterval); // Insert the merged interval

  // Add remaining intervals
  while (i < n) {
    resultArr.push(intervals[i]);
    i++;
  }

  return resultArr;
};
