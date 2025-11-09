const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];
// function intersection(a, b) {
//   const combined = [...a, ...b];
//   return combined.filter((a, b) => a !== b);
// } //3,4

function intersection(a, b) {
  let result = [];
  for (let num of a) {
    for (let i = 0; i < b.length; i++) {
      if (num === b[i]) {
        result.push(num);
      }
    }
  }
  return result;
}
const result = intersection(first, second);

console.log(result);
