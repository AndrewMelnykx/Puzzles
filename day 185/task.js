let tokens = ["1", "2", "+", "3", "*", "4", "-"];

class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const stack = [];

    for (let token of tokens) {
      if (!isNaN(token)) {
        // If it's a number, push to the stack
        stack.push(Number(token));
      } else {
        // It's an operator: pop two operands
        const b = stack.pop();
        const a = stack.pop();

        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            // Truncate towards zero
            stack.push(Math.trunc(a / b));
            break;
        }
      }
    }

    return stack.pop(); // Final result
  }
}
let solution = new Solution();
let result = solution.evalRPN(tokens);

console.log(result);
