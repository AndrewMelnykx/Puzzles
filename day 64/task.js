function comp(array1, array2) {
  const filteredArr = array1.sort((a, b) => a - b);
  const filteredArr2 = array2.sort((a, b) => a - b);

  if (!array1 || !array2) return false;
  if (array1.length === 0 && array2.length === 0) return true;

  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (filteredArr[i] ** 2 !== filteredArr2[i]) {
      return false;
    }
  }

  return true;
}
let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

const result = comp(a, b);

console.log(result);
