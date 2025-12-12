let salary = [4000, 3000, 1000, 2000];

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let sum = 0;
  let count = 0;
  let sort = salary.sort((a, b) => a - b);
  for (let i = 1; i < sort.length - 1; i++) {
    sum += salary[i];
    count++;
  }
  return sum / count;
};

let result = average(salary);

console.log(result);
