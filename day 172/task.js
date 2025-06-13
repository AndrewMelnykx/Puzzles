let nums = [1, 2, 2, 3, 3, 3];
let k = 2;

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let map = {};
    let resultArr = [];
    for (let num of nums) {
      if (map[num] !== undefined) {
        map[num]++;
      } else {
        map[num] = 1;
      }
    }
    const numsToReturn = Object.entries(map).sort((a, b) => b[1] - a[1]);
    return numsToReturn.slice(0, k).map(entry => Number(entry[0]));
  }
}

let solution = new Solution();

let result = solution.topKFrequent(nums, k);

console.log(result);
