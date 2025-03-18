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

var pivotIndex = function (nums) {
  let totalSum = nums.reduce((total, num) => total + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    if (rightSum === leftSum) return i;
    leftSum += nums[i];
  }
};

let output = pivotIndex(nums);

console.log(output);
