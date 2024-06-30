let arr = [6, 5, 4, -1, -100];

// const invert = (arr) => {
//   const filtrArrik = arr.map((n) => {
//     if (n < 0) {
//       return Math.abs(n);
//     } else if (n > 0) {
//       return -n;
//     } else {
//       return n;
//     }
//   });
//   return filtrArrik;
// };
const invert = (array) => array.map((num) => -num);

const result = invert(arr);
console.log(result);
