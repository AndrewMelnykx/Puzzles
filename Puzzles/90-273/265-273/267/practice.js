let array = [2, 3, 4];

console.log(array.every(n => n % 2 === 0));
console.log(array.some(n => n % 2 === 0));

// .findIndex()
// Index of first match
[5, 12, 8].findIndex(n => n > 10); // 1

// Index of value (or -1)
[1, 2, 3].indexOf(3); // 2

// .lastIndexOf()
// Searches from end
[1, 2, 3, 2].lastIndexOf(2); // 3

// .splice()
// Add/remove anywhere

arr.splice(1, 2, "a", "b");

// .slice()
// Copy part (non-mutating)
arr.slice(1, 3);

var myOwnReduce = function (arr, initialValue, callback) {
  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = arr[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
};
