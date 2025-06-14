let string = ["neet", "code", "love", "you"];

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.join("").toString();
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    return str.split("");
  }
}
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
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
      const word = str.slice(j + 1, j + 1 + len);
      res.push(word);
      i = j + 1 + len;
    }

    return res;
  }
}

let solution = new Solution();

let result = solution.encode(string);

console.log(result);
