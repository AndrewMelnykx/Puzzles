let s = "Was it a car or a cat I saw";

// class Solution {
//   /**
//    * @param {string} s
//    * @return {boolean}
//    */
//   isPalindrome(s) {
//     let loweredAndSplitted = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//     let splitted = loweredAndSplitted.split("");
//     let reversed = [...splitted].reverse();

//     for (let i = 0; i < splitted.length; i++) {
//       if (splitted[i] !== reversed[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// class Solution {
//   /**
//    * @param {string} s
//    * @return {boolean}
//    */
//   isPalindrome(s) {
//     let symbolless = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//     let splitted = [...symbolless.split("")].reverse();

//     for (let i = 0; i < s.length; i++) {
//       if (s[i] !== splitted[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// GPT version

// isPalindrome(s) {
//   let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return cleaned === [...cleaned].reverse().join("");
// }

// class Solution {
//   isPalindrome(s) {
//     let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//     return cleaned === [...cleaned].reverse().join("");
//   }
// }

let solution = new Solution();

let result = solution.isPalindrome(s);

console.log(result);
