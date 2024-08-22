function minMax(arr) {
  const sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  const theMinMaxArr = [];
  const lastFromSorted = sortedArr.length - 1;
  const theLowestFromSorted = sortedArr[0];
  const theGreatestFromSorted = sortedArr[lastFromSorted];
  theMinMaxArr.push(theLowestFromSorted, theGreatestFromSorted);
  return theMinMaxArr;
}
let array = [34, 7, 23, 32, 5, 62];

const result = minMax(array);

console.log(result);
