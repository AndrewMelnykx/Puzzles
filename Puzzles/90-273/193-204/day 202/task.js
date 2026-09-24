// let s1 = "abc";
// let s2 = "lecabee";

// class Solution {
//   /**
//    * @param {string} s1
//    * @param {string} s2
//    * @return {boolean}
//    */
//   checkInclusion(s1, s2) {
//     let right = s1.length;
//     let sum = 0;
//     const letters = [
//       [0, "a"],
//       [1, "b"],
//       [2, "c"],
//       [3, "d"],
//       [4, "e"],
//       [5, "f"],
//       [6, "g"],
//       [7, "h"],
//       [8, "i"],
//       [9, "j"],
//       [10, "k"],
//       [11, "l"],
//       [12, "m"],
//       [13, "n"],
//       [14, "o"],
//       [15, "p"],
//       [16, "q"],
//       [17, "r"],
//       [18, "s"],
//       [19, "t"],
//       [20, "u"],
//       [21, "v"],
//       [22, "w"],
//       [23, "x"],
//       [24, "y"],
//       [25, "z"],
//     ];
//     for (let i = 0; i < letters.length; i++) {
//       for (let j = 0; j < s1.length; j++) {
//         if (s1[j] === letters[i][1]) {
//           sum += letters[i][0];
//         }
//       }
//     }
//     for (let left = 0; left < s2.length; left++) {
//      while (left  <right){

//      }
//     }
//     return true;
//   }
// }

// let solution = new Solution();
// let result = solution.checkInclusion(s1, s2);
// console.log(result);

class Solution {
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const s1Count = Array(26).fill(0);
    const s2Count = Array(26).fill(0);

    // Count letters in s1
    for (let char of s1) {
      s1Count[char.charCodeAt(0) - 97]++;
    }

    // Initial window in s2
    for (let i = 0; i < s1.length; i++) {
      s2Count[s2[i].charCodeAt(0) - 97]++;
    }

    if (arraysEqual(s1Count, s2Count)) return true;

    // Slide the window
    for (let i = s1.length; i < s2.length; i++) {
      s2Count[s2[i].charCodeAt(0) - 97]++; // Add new char
      s2Count[s2[i - s1.length].charCodeAt(0) - 97]--; // Remove old char

      if (arraysEqual(s1Count, s2Count)) return true;
    }

    return false;
  }
}

// Helper to compare two arrays
function arraysEqual(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
