function findShort(s) {
  const sortedString = s.split(" ").sort((a, b) => a.length - b.length);
  return sortedString[0].length;
}
const result = findShort("Just a string with text");
console.log(result);
