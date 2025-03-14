const arr = [1, 2, 3, 4, 5, 3, 2];
//  FIRST WAY
// const onceRepeated = (arr) => {
//   let counter = 0;
//   const duplicates = [];
//   for (let i = 0; i < arr.length; i++) {
//     counter = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === arr[i]) {
//         counter++;
//       }
//     }
//     if (counter === 1) {
//       duplicates.push(arr[i]);
//     }
//   }

//   return duplicates;
// };

const result = arr.filter((v) => {
  return arr.indexOf(v) === arr.lastIndexOf(v);
});
console.log(result);
