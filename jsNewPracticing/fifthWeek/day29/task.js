function checkBrackets(input) {
  const stack = [];
  const matchingBracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push({ bracket: char, index: index + 1 });
    } else if (char === ")" || char === "]" || char === "}") {
      if (
        stack.length === 0 ||
        matchingBracket[stack[stack.length - 1].bracket] !== char
      ) {
        return i + 1;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? "Success" : stack[stack.length - 1].index;
}

function checkBrackets(input) {
  const stack = [];
  const matchingBracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stackLastElement = stack.length - 1;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push({ bracket: char, index: index + 1 });
    } else if (char === ")" || char === "]" || char === "}") {
      if (
        stack.length === 0 ||
        matchingBracket[stack[stackLastElement].bracket] !== char
      ) {
        return i + 1;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? "Success" : stack[stackLastElement].index;
}
