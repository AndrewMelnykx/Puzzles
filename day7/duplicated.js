function duplicated(str) {
  const charCount = {};
  const duplicates = [];
  for (const char in str) {
    charCount[char] = (charCount[char] || 0) + 1;
    for (const char in charCount) {
      if (charCount[char] > 1) {
        duplicates.push(char.repeat(charCount[char]));
      }
    }
  }
  return duplicates.join("");
}
