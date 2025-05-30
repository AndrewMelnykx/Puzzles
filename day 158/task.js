let str = "loveleetcode";
let character = "e";

var shortestToChar = function (s, c) {
  const result = new Array(s.length);
  let prev = -Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = Math.abs(i - prev);
  }
  prev = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = Math.min(result[i], Math.abs(i - prev));
  }

  return result;
};
const result = shortestToChar(str, character);
console.log(result);
