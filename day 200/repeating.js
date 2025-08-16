class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */

  topFrequent(nums, k) {
    let map = {};
    let result = [];
    let res = [];

    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = 0;
      for (let i = 0; i < nums.length; i++) {
        for (let i = 0; i < nums.length; i++) {
          for (let key in map) {
            if (Number(key) === nums[i]) {
              map[key] += 1;
            }
          }
        }
      }
    }
    for (let key in map) {
      result.push([Number(key) === nums[i]]);
    }
    result.sort((a, b) => b[1] - a[1]);
    let output = result.slice(0, k);
    for (let i = 0; i < output.length; i++) {
      res.push(output[i][0]);
    }
    return res;
  }
}

class Solution {
  threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push(nums[i], nums[left], nums[right]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[left] === nums[right - 1]) right++;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
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
      let hours = 0;
      for (let pile of piles) {
        hours += Math.ceil(pile / mid);
      }
      if (hours <= h) {
        ans = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }
}
