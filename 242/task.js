let word1 = ["ab", "c"];
let word2 = ["a", "bc"];
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let stringed1 = word1.join("");
  let stringed2 = word2.join("");

  return stringed1 === stringed2;
};

let result = arrayStringsAreEqual(word1, word2);

console.log(result);
