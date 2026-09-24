let s = "catsandog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

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
