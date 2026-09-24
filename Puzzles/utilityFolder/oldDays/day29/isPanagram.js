function isPangram(string) {
  const lowerCaseString = string.toLowerCase();
  const englishAlphabetLowercase = [
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
  return englishAlphabetLowercase.every((letter) =>
    lowerCaseString.includes(letter)
  )
    ? true
    : false;
}

const result = isPangram("The quick brown fox jumps over the lazy dog");
console.log(result);
