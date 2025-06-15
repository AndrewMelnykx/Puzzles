let nums = [1, 2, 2, 3, 3, 3];
let k = 2;

// class Solution {
//   /**
//    * @param {number[]} nums
//    * @param {number} k
//    * @return {number[]}
//    */
//   topKFrequent(nums, k) {
//     let map = {};
//     for (let num of nums) {
//       if (map[num] !== undefined) {
//         map[num]++;
//       }
//       let sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
//       return sorted.slice(0, k).map(number => Number(number));
//     }
//   }
// }

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */

  topKFrequent(nums, k) {
    let map = {};
    for (let num of nums) {
      if (map[num] !== undefined) {
        map[num]++;
      }
      let sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
      return sorted.slice(0, k).map(entry => Number(entry));
    }
  }
}

let solution = new Solution();

let result = solution.topKFrequent(nums, k);

console.log(result);
