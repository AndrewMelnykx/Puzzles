function outer() {
  let count = 0;
  function inner() {
    return count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter();
counter();
counter();
