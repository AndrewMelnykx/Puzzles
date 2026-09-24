let heights = [7, 1, 7, 2, 2, 4];

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0);
    for (let i = 0; i < heights.length; i++) {
      while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
        let height = heights[stack.pop()];
        let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
      }
      stack.push(i);
    }
    return maxArea;
  }
}

let solution = new Solution();
let result = solution.largestRectangleArea(heights);

console.log(result);
