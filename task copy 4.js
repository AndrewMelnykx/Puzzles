let allowed = "ab";
let words = ["ad", "bd", "aaab", "baa", "badab"];

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let allowedStringed = allowed.split("");
  let set = [];
  let counter = 0;
  let mapped = words.map(word => word.split(""));

  for (let w of mapped) {
    set.push(Array.from(new Set(w)));
  }

  for (let word of set) {
    if (word.every(ch => allowedStringed.includes(ch))) {
      counter++;
    }
  }
  return counter;
};

let result = countConsistentStrings(allowed, words);

console.log(result);
