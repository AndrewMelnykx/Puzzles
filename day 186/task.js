let n = 3;

// Output: ["((()))","(()())","(())()","()(())","()()()"]

class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const result = [];

    function backtrack(current, open, close) {
      // Base case: if current string is complete
      if (current.length === n * 2) {
        result.push(current);
        return;
      }

      // Add "(" if we still have open parentheses left to use
      if (open < n) {
        backtrack(current + "(", open + 1, close);
      }

      // Add ")" if there are unmatched "("
      if (close < open) {
        backtrack(current + ")", open, close + 1);
      }
    }

    // Start the recursion
    backtrack("", 0, 0);
    return result;
  }
}
class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const result = [];
    function backtrack(current, open, close) {
      if (current.length === n * 2) {
        result.push(current);
        return;
      }
      if (open < n) {
        backtrack(current + "(", open + 1, close);
      }
      if (close < open) {
        backtrack(current + ")", open, close + 1);
      }
    }
    backtrack("", 0, 0);
    return result;
  }
}

let solution = new Solution();
let result = solution.generateParenthesis(n);

console.log(result);
