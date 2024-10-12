var uniqueInOrder = function (iterable) {
  const iterableWithoutDuplicates = [];
  const iterableArr =
    typeof iterable === "string" ? iterable.split("") : iterable;
  iterableArr.forEach((element, index) => {
    if (element !== iterableArr[index - 1]) {
      iterableWithoutDuplicates.push(element);
    }
    return iterableWithoutDuplicates.join("");
  });
  return iterableWithoutDuplicates;
};
const result = uniqueInOrder("AAAABBBCCDAABBB");
console.log(result);
