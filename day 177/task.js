let s = "Was it a car or a cat I saw";

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let loweredAndSplitted = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let splitted = loweredAndSplitted.split("");
    let reversed = [...splitted].reverse();

    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i] !== reversed[i]) {
        return false;
      }
    }
    return true;
  }
}

let solution = new Solution();

let result = solution.isPalindrome(s);

console.log(result);
