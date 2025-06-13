let strs = ["act", "pots", "tops", "cat", "stop", "hat"];

// class Solution {
//   /**
//    * @param {string[]} strs
//    * @return {string[][]}
//    */
//   groupAnagrams(strs) {
//     let map = {};
//     for (let word of str) {
//       let key = word.split("").sort().join("");
//       if (!map[key]) {
//         map[key] = [];
//       }
//       map[key].push(word);
//     }
//     return Object.values(map);
//   }
// }

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let map = {};
    for (let word of strs) {
      let key = word.split("").sort().join("");
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push(word);
    }
    return Object.values(map);
  }
}

let solution = new Solution();

let result = solution.groupAnagrams(strs);
console.log(result);
