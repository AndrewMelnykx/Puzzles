let heights = [1, 1, 4, 2, 1, 3];

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sorted = [...heights].sort((a, b) => a - b);
  let wrongCount = 0;
  for (let i = 0; i < heights.length; i++) {
    if (sorted[i] !== heights[i]) {
      wrongCount += 1;
    }
  }

  return wrongCount;
};

let result = heightChecker(heights);
console.log(result);
