let board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    let map = {};
    let nums = board.map(item => {
      return item.map(str => (str === "." ? "." : Number(str)));
    });
    let firstRow = nums[0];
    for (let i = 0; i < firstRow.length; i++) {
      let res = [];
    }
    return nums;
  }
}

let solution = new Solution();
let result = solution.isValidSudoku(board);

console.log(result);
