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
    const min =
      this.MinStack.length === 0 ? val : Math.min(val, this.MinStack[this.MinStack.length - 1]);
    this.MinStack.push(min);

    this.stack.push(val);
    const min =
      this.MinStack.length == 0 ? val : Math.min(val, this.MinStack[this.MinStack.length - 1]);
    this.MinStack.push(min);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    this.MinStack.pop();
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
    return this.MinStack[this.MinStack.length - 1];
  }
}
