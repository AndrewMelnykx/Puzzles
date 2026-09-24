let words = ["bella", "label", "roller"];

/**
 * @param {string[]} words
 * @return {string[]}
 */
///Wrong solution
var commonChars = function (words) {
  let result = [];
  let ltrs = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result.push(word.split(""));
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      let sameLtrs = result[i][j] && result[i + 1][j] && result[i + 2][j];
      if (sameLtrs === sameLtrs) {
        ltrs.push(sameLtrs);
      }
    }
  }
  return ltrs;
};

// gpt solution

var commonChars = function (words) {
  let result = words[0].split("");
  for (let i = 1; i < words.length; i++) {
    let newResult = [];
    for (let ch of result) {
      let index = words[i].indexOf(ch);
      if (index !== -1) {
        newResult.push(ch);
        words[i] = words[i].slice(0, index) + words[i].slice(index + 1);
      }
    }
    result = newResult;
  }
  return result;
};

// shortes solution

var commonChars = function (words) {
  let res = [];
  for (let wo of words[0]) {
    if (words.every(word => word.includes(wo))) {
      res.push(wo);
      words = words.map(word => word.replace(wo, ""));
    }
  }
  return res;
};

let result = commonChars(words);
console.log(result);
