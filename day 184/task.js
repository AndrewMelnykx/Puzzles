let output = ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"];

class MinStack {
  constructor() {
    this.stack = [];
    this.MinStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    let arr = this.stack;
    return arr[arr.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    let arr = this.stack;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      min = Math.min(arr[i], min);
    }
    return min;
  }
}
