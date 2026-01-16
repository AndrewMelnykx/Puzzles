let nums1 = [1, 3];
let nums2 = [2, 4];

class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
    let combined = [...nums1, ...nums2].sort((a, b) => a - b);
    let n = combined.length;
    if (n % 2 === 1) {
      return combined[Math.floor(n / 2)];
    } else {
      let mid1 = combined[n / 2 - 1];
      let mid2 = combined[n / 2];
      return (mid1 + mid2) / 2;
    }
  }
}

let solution = new Solution();
let result = solution.findMedianSortedArrays(nums1, nums2);

console.log(result);
