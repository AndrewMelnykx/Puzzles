function isIsogram(str) {
  str = str.toLowerCase();
  const letterSet = new Set();

  for (let char of str) {
    if (letterSet.has(char)) {
      return false;
    }
    letterSet.add(char);
  }
  return true;
}

const result = isIsogram("aba");
console.log(result);
