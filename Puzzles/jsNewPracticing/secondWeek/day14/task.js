let nums = [-1, 0, 1, 2, -1, -4];
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Step 1: Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    // Step 2: Skip duplicates for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Step 3: Skip duplicates for second and third element
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Need a bigger number
      } else {
        right--; // Need a smaller number
      }
    }
  }

  return result;
};
const output = threeSum(nums);

console.log(output);
