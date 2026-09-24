let nums = [1, 1, 1, 2, 2, 3];
let k = 2;

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let map = {};
    let result = [];
    let res = [];
    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = 0;
    }
    for (let i = 0; i < nums.length; i++) {
      for (let key in map) {
        if (Number(key) === nums[i]) {
          map[key] += 1;
        }
      }
    }
    for (let key in map) {
      result.push([Number(key), map[key]]);
    }
    result.sort((a, b) => b[1] - a[1]);
    let output = result.slice(0, k);
    for (let i = 0; i < output.length; i++) {
      res.push(output[i][0]);
    }
    return res;
  }
}

let solution = new Solution();
let result = solution.topKFrequent(nums, k);

console.log(result);
