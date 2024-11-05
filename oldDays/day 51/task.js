function digitalRoot(n) {
  const resultArr = [];
  const digitsArr = n.toString().split("");
  //   let sum = 0;

  //   for (let i = 0; i < digitsArr.length; i++) {
  //     sum += parseInt(digitsArr[i], 10);
  //   }
  //   return sum;
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((total, num) => total + parseInt(num, 10), 0);
  }
  return n;
}
const result = digitalRoot(1234);
console.log(result);
