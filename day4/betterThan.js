function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const sumOfPoints = classPoints.reduce((total, n) => total + n, 0);
  const lengthOfArr = classPoints.length;
  const averAge = sumOfPoints / lengthOfArr;
  if (yourPoints > averAge) {
    return true;
  } else {
    return false;
  }
}
const othersResult = [1, 2, 3, 4];
const result = betterThanAverage(othersResult, 5);
console.log(result);
