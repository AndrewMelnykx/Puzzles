let arr = [0, 3, 2, 1];

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

const result = validMountainArray(arr);
console.log(result);

var validMountainArray = function (arr) {
  let lengthArr = arr.length;
  if (lengthArr < 3) return false;

  let i = 0;

  while (i + 1 < lengthArr && arr[i] < arr[i + 1]) {
    i++;
  }
  if (i === 0 || i === lengthArr - 1) return false;

  while (i + 1 < lengthArr && arr[i] > arr[i + 1]) {
    i++;
  }
  return i === lengthArr - 1;
};
