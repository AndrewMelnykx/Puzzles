// var intersection = function (nums1, nums2) {
//   let resultSet = new Set();
//   let nums1Set = new Set(nums1);
//   for (let num of nums2) {
//     if (nums1Set.has(num)) {
//       resultSet.add(num);
//     }
//   }
//   return Array.from(resultSet);
// };
var intersection = function (nums1, nums2) {
  let resultArr = [];
  for (let num of nums1) {
    if (nums2.includes(num) && !resultArr.includes(num)) {
      resultArr.push(num);
    }
  }
  return resultArr;
};

const result = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(result);
