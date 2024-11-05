function longest(s1, s2) {
  const sumOfTwo = s1 + s2;
  const unniqueCharts = [...new Set(sumOfTwo)];
  const sortedUniqueCharts = unniqueCharts.sort();
  const sortedString = sortedUniqueCharts.join("");
  return sortedString;
}
let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";

const result = longest(a, b);
console.log(result);

// solution from CodeWars
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
