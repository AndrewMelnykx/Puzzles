const counter = () => {
  let count = 0;
  function increment() {
    return ++count;
  }
  return increment;
};

const counterOne = counter();
const counterTwo = counter();

console.log(counterOne());
console.log(counterTwo());
console.log(counterOne());
