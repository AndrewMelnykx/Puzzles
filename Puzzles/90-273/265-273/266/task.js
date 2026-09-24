let nums = [1, 3, 4, 2, 2];

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  for (let key in map) {
    if (map[key] >= 2) {
      return Number(key);
    }
  }
};

// function findDuplicate(nums: number[]): number {
//   let slow = nums[0];
//   let fast = nums[0];

//   // Phase 1: Find intersection point
//   do {
//     slow = nums[slow];
//     fast = nums[nums[fast]];
//   } while (slow !== fast);

//   // Phase 2: Find entrance to the cycle
//   slow = nums[0];
//   while (slow !== fast) {
//     slow = nums[slow];
//     fast = nums[fast];
//   }

//   return slow;
// }

let result = findDuplicate(nums);

console.log(result);
