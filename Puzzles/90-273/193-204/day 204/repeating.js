class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   *
   */

  threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && [nums[i === nums[i - 1]]]) continue;
      let left = i + 1;
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push(nums[i] + nums[left] + nums[right]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return result;
  }
}

class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */

  inEatingSpeed(piles, h) {
    let left = 0;
    let right = Math.max(...piles);
    let ans = piles;

    while (left < right) {
      let mid = (left + right) / 2;

      for (let pile of piles) {
        hours += Math.ceil(pile / mid);
      }
      if (hours <= h) {
        ans = mid;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }
}

class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */

  characterReplacement(s, k) {
    let left = 0;
    let counts = {};
    let maxCount = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
      let char = s[right];
      counts[char] = (counts[char] || 0) + 1;
      maxCount = Math.max(maxCount, counts[char]);

      while (right - left + 1 - maxCount > k) {
        counts[s[left]]--;
        left++;
      }
      maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
  }
}

var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
  }
  nums.sort((a, b) => a - b);
  if (k % 2 === 1) {
    nums[0] = -nums[0];
  }
  return nums.reduce((s, t) => s + t, 0);
};
