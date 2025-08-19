let words = ["bella", "label", "roller"];

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = [];
  let map = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result.push(word.split(""));

    for (let j = 0; j < word.length; j++) {}
  }
  return result;
};

let result = commonChars(words);
console.log(result);
