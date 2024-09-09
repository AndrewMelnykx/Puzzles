function digPow(n, p) {
  const numsArr = n.toString().split("").map(Number);
  const powArr = numsArr.map((num, index) => Math.pow(num, p + index));
  const powedNumber = powArr.reduce((whole, digit) => whole + digit, 0);
  return powedNumber % n === 0 ? powedNumber / n : -1;
}

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

const result = digPow(123456, 4);

console.log(result);
