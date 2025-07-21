let str = "loveleetcode";
let character = "e";

var shortestToChar = function (s, c) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[j]) {
      result.push(s[i]);
    }
    for (let j = 0; j < s.length; j++) {
      let smallestIndex = [];
      if (s[j] === c) {
        smallestIndex.push(indexOf(s[j]));
      }
      result.push(smallestIndex.map((n) => Math.min(n)));
    }
  }
  return result;
};

const result = shortestToChar(str, character);

console.log(result);
