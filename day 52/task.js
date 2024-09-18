function duplicateEncode(word) {
  const lowerWord = word.toLowerCase();
  const charCount = {};

  for (const char of lowerWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let result = "";
  for (const char of lowerWord) {
    result += charCount[char] > 1 ? ")" : "(";
  }

  return result;
}
const result = duplicateEncode("success");
console.log(result);
