const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};
const result = binaryArrayToNumber([0, 0, 1, 0]);
console.log(result);
