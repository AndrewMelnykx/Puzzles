function disemvowel(str) {
  const listOfVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const arrFromString = str.split("");
  const filteredArr = arrFromString.filter(
    (letter) => !listOfVowels.includes(letter)
  );
  return filteredArr.join("");
}
// const result = disemvowel("Programmer");

// console.log(result);
