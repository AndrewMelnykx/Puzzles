let widths = [
  4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10,
];
let s = "bbbcccdddaaa";
var numberOfLines = function (widths, s) {
  let lettersMap = {};
  let widthSum = 0;
  let lines = 1;
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let linesArr = [];

  for (let i = 0; i < alphabet.length && widths.length; i++) {
    lettersMap[alphabet[i]] = widths[i];
  }

  for (let i = 0; i < s.length; i++) {
    let letterWidth = lettersMap[s[i]];
    if (widthSum + letterWidth > 100) {
      linesArr.push(widthSum);
      widthSum = letterWidth;
      lines++;
    } else {
      widthSum += letterWidth;
    }
  }

  linesArr.push(widthSum);
  let lastRow = linesArr[linesArr.length - 1];
  resultArr = [lines, lastRow];
  return resultArr;
};

let output = numberOfLines(widths, s);

console.log(output);
