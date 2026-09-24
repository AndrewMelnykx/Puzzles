function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
const result = sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]);
console.log(result);
