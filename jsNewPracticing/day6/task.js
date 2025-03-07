let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums1.push(...nums2.slice(0, n));
  nums1.sort((a, b) => a - b);
};

console.log(merge(nums1, m, nums2, n));
