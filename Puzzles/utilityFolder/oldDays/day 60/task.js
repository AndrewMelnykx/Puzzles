function isValidBraces(s) {
  const matchingBraces = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== matchingBraces[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
console.log(isValidBraces("()[]{}")); // true
console.log(isValidBraces("([{}])")); // true
console.log(isValidBraces("(]")); // false
console.log(isValidBraces("([)]")); // false
