var nextGreaterElement = function (nums1, nums2) {
  let resultArr = [];
  for (let num of nums1) {
    let foundIndex = nums2.indexOf(num);
    let nextGreater = -1;

    for (let j = foundIndex + 1; j < nums2.length; j++) {
      if (nums2[j] > num) {
        nextGreater = nums2[j];
        break;
      }
    }
    resultArr.push(nextGreater);
  }
  return resultArr;
};

const result = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
console.log(result);
