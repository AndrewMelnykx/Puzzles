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
      if (current.length === n * 2) {
        result.push(current);
        return;
      }
      if (open < n) {
        backtrack(+"(", open + 1, close);
      }
      if (close < open) {
        backtrack(current + ")", open, close + 1);
      }
    }
    backtrack("", 0, 0);
    return result;
  }
}

// So it equlas 3 and condtion make 3 parenthasis closed , and recursion works the way if it longer than 3 then stop because it wont succeed

let solution = new Solution();
let result = solution.generateParenthesis(n);

console.log(result);
