function persistence(num) {
  let count = 0;
  while (num >= 10) {
    const numArr = num.toString().split("").map(Number);
    num = numArr.reduce((acc, digit) => acc * digit, 1);
    count++;
  }
  return count;
}
//  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

const result = persistence(22);
console.log(result);
