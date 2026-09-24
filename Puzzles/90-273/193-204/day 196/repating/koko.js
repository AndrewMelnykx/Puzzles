let piles = [1, 4, 3, 2];
let h = 9;

class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let left = 0;
    let right = Math.max(...piles);
    let ans = right;

    while (left < right) {
      let mid = (left + right) / 2;
      let hours = 0;
      for (let pile of piles) {
        hours += Math.ceil(pile / mid);
      }
      if (hours <= h) {
        ans = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }
}

let solution = new Solution();
let result = solution.minEatingSpeed(piles, h);

console.log(result);
