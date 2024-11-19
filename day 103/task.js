var nextGreatestLetter = function (letters, target) {
  const englishLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const targetIndex = englishLetters.indexOf(target);
  const result = letters.find((letter) => {
    const letterIndex = englishLetters.indexOf(letter);
    return letterIndex > targetIndex;
  });
  return result || letters[0];
};

const result = nextGreatestLetter(["c", "f", "j"], "a");
console.log(result);
