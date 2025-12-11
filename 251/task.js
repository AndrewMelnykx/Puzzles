let s = "catsandog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function (s, wordDict) {
//   let count = 0;
//   for (let i = 0; i < wordDict.length; i++) {
//     if (s.includes(wordDict[i])) {
//       count++;
//       return true;
//     }
//     if (count === wordDict.length - 1) {
//       return true;
//     }
//     return false;
//   }
// };
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= s.length; i++) {
    if (dp[i]) {
      for (let word of set) {
        if (s.startsWith(word, i)) {
          dp[i + word.length] = true;
        }
      }
    }
  }

  return dp[s.length];
};

let result = wordBreak(s, wordDict);
console.log(result);
