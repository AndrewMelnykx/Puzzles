function findUniq(arr) {
  const filteredArr = arr.sort((a, b) => a - b);
  const lastIndexOfFiltered = filteredArr.length - 1;
  if (filteredArr[0] > filteredArr[1] || filteredArr[0] < filteredArr[1]) {
    return filteredArr[0];
  } else if (
    filteredArr[lastIndexOfFiltered] > filteredArr[0] ||
    filteredArr[lastIndexOfFiltered] < filteredArr[0]
  ) {
    return filteredArr[lastIndexOfFiltered];
  }
}
findUniq([1, 1, 1, 2, 1, 1]) === 2;
findUniq([0, 0, 0.55, 0, 0]) === 0.55;
