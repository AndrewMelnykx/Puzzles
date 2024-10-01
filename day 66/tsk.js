function duplicateCount(text) {
  const splittedArr = text.toLowerCase().split("");
  let charMap = {};
  let dupCount = 0;

  for (let chart of splittedArr) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (let char in charMap) {
    if (charMap[char] > 1) {
      dupCount++;
    }
  }
  return dupCount;
}
const result = duplicateCount("ABBA");
console.log(result);
