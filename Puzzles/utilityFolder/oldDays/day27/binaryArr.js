const binaryArrayToNumber = (arr) => {
  const stringBinary = [...arr].join("");
  const numberFromBinary = parseInt(stringBinary, 2);
  return numberFromBinary;
};
const result = binaryArrayToNumber([0, 0, 0, 1]);

console.log(result);
