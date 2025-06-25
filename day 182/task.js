// let par = "([{}])";

// class Solution {
//   /**
//    * @param {string} s
//    * @return {boolean}
//    */
//   isValid(s) {
//     let stackLeft = [].reverse();
//     let stackRight = [];
//     let string = s.split("");
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === "(" || string[i] === "[" || string[i] === "{") {
//         stackLeft.push(string[i]);
//       } else {
//         stackRight.push(string[i]);
//       }
//     }
//     for (let i = stackLeft.length - 1; i >= 0; i--) {
//       for (let j = 0; j < stackLeft.length; j++) {
//         if (stackRight[j] !== stackLeft[i]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
// }

// GPT SOLUTION

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    const map = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (let char of s) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        if (stack.pop() !== map[char]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}

class Solution {
  isValid(s) {
    const stack = [];
    const map = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    for (let char of s) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else {
        if (stack.pop() !== map[char]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}

let solution = new Solution();
let result = solution.isValid(par);

console.log(result);
