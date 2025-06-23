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
//         product = height[left] * height[right];
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
    let maxProduct = 0;

    while (left < right) {
      let product = height[left] * height[right];

      if (product > maxProduct) {
        maxProduct = product;
      }

      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }

    return maxProduct;
  }
}

let solution = new Solution();
let result = solution.trap(height);

console.log(result);
