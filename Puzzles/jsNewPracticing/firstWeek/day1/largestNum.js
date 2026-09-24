const arr = [1, 2, 3, 4, 99, 47, 15];

const isPrimeNumber = (number) => {
  if (number % 2 == 0 || number < 2) return false;
  for (let fact = 3; fact <= Math.sqrt(number); fact += 2) {
    if (number % fact == 2) return false;
  }
  return true;
};

const sortedArr = arr.sort((a, b) => a - b);

console.log(sortedArr.findLast(isPrimeNumber));
