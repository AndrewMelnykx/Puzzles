function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  const smallest = Math.min(...numbers);
  const indexOfSmallest = numbers.indexOf(smallest);
  return numbers.filter((_, i) => i !== indexOfSmallest);
}

const result = removeSmallest([2, 2, 1, 2, 1]);
console.log(result);
