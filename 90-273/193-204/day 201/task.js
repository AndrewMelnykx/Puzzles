let s = "XYYX";
let k = 2;

// WRONG SOLUTION
class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let map = {};
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      map[s[i]] = (map[s[i]] || 0) + 1;
    }

    for (let key in map) {
      max = Math.max(map[key] + k, max);
    }
    return max;
  }
}
// GPT SOLUTION

class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */

  characterReplacement(s, k) {
    let left = 0;
    let counts = {};
    let maxCount = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
      let char = s[right];
      counts[char] = (counts[char] || 0) + 1;

      maxCount = Math.max(maxCount, counts[char]);

      while (right - left + 1 - maxCount > k) {
        counts[s[left]]--;
        left++;
      }
      maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
  }
}

let solution = new Solution();
let result = solution.characterReplacement(s, k);

console.log(result);
