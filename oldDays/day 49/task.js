String.prototype.camelCase = function () {
  return this.trim()
    .split(/\s+/)
    .filter((w) => w.length)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
};
const result = "hello world".splitedWords();
console.log(result);
