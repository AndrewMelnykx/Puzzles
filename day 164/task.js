let arr = [0, 3, 2, 1];

// var validMountainArray = function (arr) {
//   if (arr.length < 3) {
//     return false;
//   }
//   let decreasingArr = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       decreasingArr = 0;
//     } else {
//       decreasingArr = 1;
//     }
//     if (decreasingArr === 1 && arr[i] > arr[i + 1]) {
//       decreasingArr = 1;
//     } else {
//       decreasingArr = 2;
//     }
//     if (decreasingArr === 2) {
//       return false;
//     }
//   }
// };

var validMountainArray1 = function (arr) {
  const n = arr.length;
  if (n < 3) return false;

  let i = 0;

  // Walk up
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

  // Peak can't be first or last
  if (i === 0 || i === n - 1) return false;

  // Walk down
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1;
};

var validMountainArray = function (arr) {
  const arrLength = arr.length;
  if (arrLength < 3) return false;

  let i = 0;

  while (i + 1 < arrLength && arr[i] < arr[i + 1]) {
    i++;
  }
  if (i === 0 || i === arrLength - 1) return false;
  while (i + 1 < arrLength && arr[i] > arr[i + 1]) {
    i++;
  }
  return i === n - 1;
};

const result = validMountainArray(arr);
console.log(result);
