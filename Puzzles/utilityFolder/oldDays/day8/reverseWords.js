function reverseWords(str) {
  const wordsArr = str.split(" ");
  const reversedWordsArr = wordsArr.map((word) =>
    word.split("").reverse().join("")
  );
  const reversedStr = reversedWordsArr.join(" ");
  return reversedStr;
}

const result = reverseWords("abc");
console.log(result);
