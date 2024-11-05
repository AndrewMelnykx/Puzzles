function getMiddle(s) {
  const lengthOfWord = s.length;
  if (lengthOfWord % 2 === 0) {
    return s[lengthOfWord / 2 - 1] + s[lengthOfWord / 2];
  } else {
    return s[Math.floor(lengthOfWord / 2)];
  }
}

const result = getMiddle("balki");
console.log(result);

//solution from codeWars
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
