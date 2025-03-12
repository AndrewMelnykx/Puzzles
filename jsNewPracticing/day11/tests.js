var a = "test";

class Test {
  a = "any";
  prop() {
    console.log(this.a);
    return a;
  }
  static get prop() {
    console.log(a);
    return a;
  }
}

const test = new Test();
// test.prop();
// test.prop = "bar";
Test.prop;

// Test.prototype.prop = function () {
//   console.log("prototype overridden method", this.a);
//   return "prototype overridden";
// };

test.prop = function () {
  console.log("overridden method", this.a);
  return "overridden";
};

test.prop();
