let temperatures = [30, 38, 30, 36, 35, 40, 28];

class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    let result = [];
    let count = 0;

    for (let i = 0; i < temperatures.length; i++) {
      let found = false;
      for (let j = i + 1; j < temperatures.length; j++) {
        if (temperatures[i] < temperatures[j]) {
          result.push(j - i);
          found = true;
          break;
        }
      }
      if (!found) {
        result.push(0);
      }
    }
    return result;
  }
}

let solution = new Solution();
let result = solution.dailyTemperatures(temperatures);

console.log(result);
