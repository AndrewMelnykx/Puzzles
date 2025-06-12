let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
// [ 'act', 'opst', 'opst', 'act', 'opst', 'aht' ]

// class Solution {
//   /**
//    * @param {string[]} strs
//    * @return {string[][]}
//    */
//   groupAnagrams(strs) {
//     let indexedSorted = [];
//     let sorted = strs.map(word => word.split("").sort().join(""));
//     for (let i = 0; i < sorted.length; i++) {
//       let simPair = [];
//       for (let j = 1; j < sorted.length - 1; j++) {
//         if (sorted[i] === sorted[j]) {
//           simPair.push([sorted[j], i]);
//         }
//         indexedSorted.push(simPair);
//       }
//     }
//     return indexedSorted;
//   }
// }

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let map = {};
    for (let word of str) {
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
