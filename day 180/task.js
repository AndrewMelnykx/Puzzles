let height = [1, 7, 2, 5, 4, 7, 3, 6];

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let result = [];
    let left = 0;
    let right = heights.length - 1;
    let product = 0;
    let maxProduct = 0;

    while (left < right) {
      product = heights[left] * heights[right];
      maxProduct = Math.max(maxProduct, product);
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxProduct;
  }
}

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxProduct = 0;

    while (left < right) {
      const heightMin = Math.min(heights[left], heights[right]);
      const width = right - left;
      const area = heightMin * width;
      maxProduct = Math.max(maxProduct, area);

      // Move the pointer pointing to the shorter height
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }

    return maxProduct;
  }
}

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */

  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxProduct = 0;

    while (left < right) {
      const heightMin = Math.min(heights[left], heights[right]);
      const width = right - left;
      maxProduct = Math.max(maxProduct, area);
    }
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
    return maxProduct;
  }
}

let solution = new Solution();
let result = solution.maxArea(height);

console.log(result);
