let string = ["neet", "code", "love", "you"];

class Solution {
  /**
   * @param {string} str
   * @returns {string[]}
   */
  encode(strs) {
    return strs.map(s => s.length + "#" + s).join("");
  }
  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") j++;
      const len = parseInt(str.slice(i, j), 10);
      const word = str.slice(j + 1, i + 1 + len);
      res.push(word);
      i = j + 1 + len;
    }
  }
}

class Solution {
  /**
   * @param {string} str
   * @returns {string[]}
   */

  encode(strs) {
    return strs.map(word => word.length + "#" + word).join("");
  }
  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(strs) {
    const res = [];
    let i = 0;
    while (i < strs.length) {
      let j = i;
      while (str[j] !== "#") j++;
      const len = parseInt(strs.slice(i, j), 10);
      const word = strs.slice(j + 1, j + 1 + len);
      res.push(word);
    }
    return res;
  }
}

let solution = new Solution();

let result = solution.encode(string);

console.log(result);
