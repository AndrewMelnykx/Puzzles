function isPangram(string) {
  string = string.toLowerCase();
  const alphabetSet = new Set();

  for (let char of string) {
    if (char >= "a" && char <= "z") {
      alphabetSet.add(char);
    }
  }

  return alphabetSet.size === 26;
}
