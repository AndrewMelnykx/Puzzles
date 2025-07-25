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
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = board[r][c];
        if (val === ".") continue;
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
          return false;
        }
        rows[r].add(val);
        cols[c].add(val);
        boxes[boxIndex].add(val);
      }
    }
    return true;
  }
}
class Solution {
  isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = board[r][c];
        if (val === ".") continue;
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
          return false;
        }
        rows[r].add(val);
        cols[c].add(val);
        boxes[boxIndex].add(val);
      }
    }
    return true;
  }
}

let solution = new Solution();
let result = solution.isValidSudoku(board);

console.log(result);
