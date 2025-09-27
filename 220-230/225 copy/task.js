let nums = [100, 4, 200, 1, 3, 2];

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   let map = {};
//   if (nums.length < 1) {
//     return 0;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let key = nums[i];
//     map[key] = (map[key] || 0) + 1;
//   }
//   let keys = Object.keys(map);
//   let numi = keys.map(n => Number(n));

//   let count = 0;
//   for (let i = 0; i < numi.length; i++) {
//     if (numi[i + 1] - numi[i] === 1) {
//       count++;
//     } else {
//       break;
//     }
//   }
//   return count + 1;
// };

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let numSet = new Set(nums); // put all numbers in a set for O(1) lookup
  let longest = 0;

  for (let num of numSet) {
    // only start counting if 'num' is the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
};

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let numsSet = new Set(nums);
  let longest = 0;

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      longest = Math.max(longest, currentStreak);
    }
  }
  return longest;
};

let result = longestConsecutive(nums);

console.log(result);
