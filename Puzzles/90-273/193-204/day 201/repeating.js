let s = "zxyzxyz";

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLength = 0;
    let seen = new Set();

    for (let right = 0; right < s.length; right++) {
      while (seen.has(s[right])) {
        seen.delete(s[left]);
        left++;
      }
      seen.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
  }
}

class Solution {
  characterReplacement(s, k) {
    let left = 0;
    let counts = {};
    let maxCount = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
      let char = s[right];
      counts[char] = (counts[char] || 0) + 1;

      // track max freq char in this window
      maxCount = Math.max(maxCount, counts[char]);

      // shrink window if too many replacements needed
      while (right - left + 1 - maxCount > k) {
        counts[s[left]]--;
        left++;
      }

      maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
  }
}
