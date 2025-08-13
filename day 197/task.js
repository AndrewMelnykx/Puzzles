let head = [0, 1, 2, 3];

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class Solution {
//   /**
//    * @param {ListNode} head
//    * @return {ListNode}
//    */
//   reverseList(head) {
//     let res = [];
//     for (let i = head.length - 1; i >= 0; i--) {
//       res.push(head[i]);
//     }
//     return res;
//   }
// }

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
      let nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
    }
    return prev;
  }
}

let solution = new Solution();
let result = solution.reverseList(head);

console.log(result);
