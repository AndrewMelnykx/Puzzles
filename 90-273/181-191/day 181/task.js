let height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];

// class Solution {
//   /**
//    * @param {number[]} height
//    * @return {number}
//    */
//   trap(height) {
//     let left = 0;
//     let product = 0;
//     let maxProduct = 0;
//     let right = height.length - 1;

//     while (left < right) {
//       if (left !== right) {
//         product = height[right] * height[left];
//         maxProduct = Math.max(maxProduct, product);
//       }
//       if (height[left] < height[right]) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//     return maxProduct;
//   }
// }

class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          totalWater += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          totalWater += rightMax - height[right];
        }
        right--;
      }
    }

    return totalWater;
  }
}

class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          totalWater += leftMax - height[left];
        }
        left++;
      } else {
        if (height >= rightMax) {
          rightMax = height[right];
        } else {
          totalWater += rightMax - height[right];
        }
      }
    }
    return totalWater;
  }
}

let solution = new Solution();
let result = solution.trap(height);

console.log(result);
