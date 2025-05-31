// var merge = function (nums1, m, nums2, n) {
//   let concatedArr = [];
//   if (m === 0 && n === 0) {
//     return [];
//   }
//   for (let i = 0; i < m; i++) {
//     concatedArr.push(nums1[i]);
//   }
//   for (let i = 0; i < n; i++) {
//     concatedArr.push(nums2[i]);
//   }

//   return concatedArr.sort((a, b) => a - b);
// };
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the end of nums1

  // Merge in reverse order
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, copy them over
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

const result = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(result);
