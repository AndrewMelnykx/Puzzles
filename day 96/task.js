var findWords = function (words) {
  const resultArr = [];
  const firstRow = "qwertyuiop";
  const secondRow = "asdfghjkl";
  const thirdRow = "zxcvbnm";

  words.forEach((word) => {
    const lowerWord = word.toLowerCase();

    if (
      [...lowerWord].every((char) => firstRow.includes(char)) ||
      [...lowerWord].every((char) => secondRow.includes(char)) ||
      [...lowerWord].every((char) => thirdRow.includes(char))
    ) {
      resultArr.push(word);
    }
  });

  return resultArr;
};

const result = findWords(["Hello", "Alaska", "Dad", "Peace"]);
console.log(result);
