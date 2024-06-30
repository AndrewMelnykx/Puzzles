let arr = [6, 5, 4, -1, -100];

function findSmallestInt(arr) {
  const smallest = Math.min(...arr);
  return smallest;
}

const result = findSmallestInt(arr);

console.log(result);
