let nums = [1, 7, 3, 6, 5, 6];

// mine solution
// var pivotIndex = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   let sumRight = 0;
//   let sumLeft = 0;

//   while (nums[left] < nums[right]) {
//     if (sumRight !== sumLeft) {
//       return false;
//     }

//     if (nums[left] < nums[right]) {
//       left++;
//       sumLeft += nums[left];
//     } else {
//       right--;
//       sumRight += nums[right];
//     }
//   }
//   return sumRight;
// };

var pivotIndex1 = function (nums) {
  let total = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - leftSum - nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
};

var pivotIndex = function (nums) {
  let total = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - leftSum - nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
};

let output = pivotIndex(nums);

console.log(output);
