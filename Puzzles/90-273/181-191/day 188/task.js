let target = 10;
let position = [4, 1, 0, 7];
let speed = [2, 2, 1, 1];

class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    let combined = [];
    for (let i = 0; i < position.length; i++) {
      let time = (target - position[i]) / speed[i];
      combined.push(time);
    }
    let fleets = new Set(combined);
    return fleets.size;
  }
}

class Solution {
  carFleet(target, position, speed) {
    let combined = [];

    // Step 1: Calculate time to target and combine with position
    for (let i = 0; i < position.length; i++) {
      let time = (target - position[i]) / speed[i];
      combined.push([position[i], time]);
    }

    // Step 2: Sort by position descending
    combined.sort((a, b) => b[0] - a[0]);

    // Step 3: Use a stack to count fleets
    let stack = [];

    for (let [pos, time] of combined) {
      if (stack.length === 0 || time > stack[stack.length - 1]) {
        stack.push(time); // New fleet
      }
      // else, this car joins the fleet ahead (do nothing)
    }

    return stack.length;
  }
}

let solution = new Solution();
let result = solution.carFleet(target, position, speed);

console.log(result);
