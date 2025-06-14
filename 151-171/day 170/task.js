let s = "racecar";
let t = "carrace";

// class Solution {
//   /**
//    * @param {string} s
//    * @param {string} t
//    * @return {boolean}
//    */
//   isAnagram(s, t) {
//     let sumOfSortedStringOne = [];
//     let sumOfSortedStringTwo = [];

//     let lettersValues = {
//       a: 1,
//       b: 2,
//       c: 3,
//       d: 4,
//       e: 5,
//       f: 6,
//       g: 7,
//       h: 8,
//       i: 9,
//       j: 10,
//       k: 11,
//       l: 12,
//       m: 13,
//       n: 14,
//       o: 15,
//       p: 16,
//       q: 17,
//       r: 18,
//       s: 19,
//       t: 20,
//       u: 21,
//       v: 22,
//       w: 23,
//       x: 24,
//       y: 25,
//       z: 26,
//     };
//     for (let letter of s) {
//       for (let key in lettersValues) {
//         if (key === letter) {
//           sumOfSortedStringOne.push(lettersValues[key]);
//         }
//       }
//     }
//     for (let letter of t) {
//       for (let keyTwo in lettersValues) {
//         if (keyTwo === letter) {
//           sumOfSortedStringTwo.push(lettersValues[keyTwo]);
//         }
//       }
//     }

//     if (
//       sumOfSortedStringOne.reduce((t, n) => t + n, 0) ===
//         sumOfSortedStringTwo.reduce((t, n) => t + n, 0) &&
//       sumOfSortedStringOne.length === sumOfSortedStringTwo.length
//     ) {
//       return true;
//     }
//     return false;
//   }
// }

// class Solution {
//   /**
//    * @param {string} s
//    * @param {string} t
//    * @return {boolean}
//    */

//   isAnagram(s, t) {
//     lettersObj = {};
//     const nums1 = [];
//     const nums2 = [];

//     for (const chart of s) nums1.push(lettersObj[chart]);
//     for (const chart of t) nums2.push(lettersObj[chart]);

//     const sum1 = nums1.reduce((a, b) => a + b, 0);
//     const sum2 = nums2.reduce((a, b) => a + b, 0);

//     return sum1 === sum2 && nums1.length === nums2.length;
//   }
// }

class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    return s.split("").sort().join("") === t.split("").sort().join("");
  }
}

let solution = new Solution();
let result = solution.isAnagram(s, t);
console.log(result);
