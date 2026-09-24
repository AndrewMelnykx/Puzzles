function narcissistic(value) {
  const numArr = value.toString().split("").map(Number);
  const powIndex = numArr.length;
  const sum = numArr.reduce((total, num) => total + Math.pow(num, powIndex), 0);
  return sum === value;
}
const result = narcissistic(153);
console.log(result);
