let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];

var relativeSortArray = function (arr1, arr2) {
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i];
    map[key] = (map[key] || 0) + 1;
  }
  let index = 0;
  for (let key of arr2) {
    let count = map[key] || 0;
    for (let i = 0; i < count; i++) {
      arr1[index++] = key;
    }
  }
  return arr1;
  let leftovers = [];
  for (let key in map) {
    let count = map[key];
    for (let i = 0; i < count; i++) {
      leftovers.push(Number(key));
    }
  }
  leftovers.sort((a, b) => a - b);

  for (let num of leftovers) {
    arr1[index++] = num;
  }

  return arr1;
};

let result = relativeSortArray(arr1, arr2);
console.log(result);
