let words = ["hello", "world", "leetcode"];
let chars = "welldonehoneyr";

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
// var countCharacters = function (words, chars) {
//   for (let i = 0; i < words.length; i++) {
//     let count = 0;
//     for (let j = 0; j < chars.length; j++) {
//       if (words[i].includes(chars[j])) {
//         count++;
//       }
//     }
//     return count;
//   }
// };

// let result = countCharacters(words, chars);

// console.log(result);

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  // build freq map for chars
  let charCount = {};
  for (let c of chars) {
    charCount[c] = (charCount[c] || 0) + 1;
  }

  let total = 0;

  for (let word of words) {
    let wordCount = {};
    for (let c of word) {
      wordCount[c] = (wordCount[c] || 0) + 1;
    }

    // check if word can be formed
    let canForm = true;
    for (let c of word) {
      if (!charCount[c] || wordCount[c] > charCount[c]) {
        canForm = false;
        break;
      }
    }

    if (canForm) {
      total += word.length;
    }
  }

  return total;
};

var countCharacters = function (words, chars) {
  let chartCount = {};
  for (let c of chars) {
    chartCount[c] = (chartCount[c] || 0) + 1;
  }
  let total = 0;
  for (let word of words) {
    let wordCount = {};
    for (let c of word) {
      wordCount[c] = (wordCount[c] || 0) + 1;
    }
    let canForm = true;
    for (let c of word) {
      if (!chartCount[c] || wordCount[c] > chartCount[c]) {
        canForm = false;
        break;
      }
    }
    if (canForm) {
      total += word.length;
    }
  }
};
console.log(countCharacters(words, chars)); // 👉 10
