let nums = [2, 0, 2, 1, 1, 0];

// var sortColors = function (nums) {
//   let result = [];
//   let left = 0;
//   let right = nums.length;
//   let min = Math.min(...nums);

//   //   while (left < right) {
//   //     let mid = nums[(left + right) / 2];
//   //   }
//   while(nums.length >= 0){

//   }
//   return min;
// };
var sortColors = function (nums) {
  let result = [];
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    map[key] = (map[key] || 0) + 1;
  }
  for (let key of [1, 2, 3]) {
    let count = map[key] || 0;
    for (let i = 0; i < count; i++) {
      result.push(key);
    }
  }
  return result;
};

let result = sortColors(nums);

console.log(result);
