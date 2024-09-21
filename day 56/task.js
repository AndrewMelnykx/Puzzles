let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
var addTwoPromises = async function (promise1, promise2) {
  const promiseOneResult = await promise1;
  const promiseTwoResult = await promise2;
  return promiseOneResult + promiseTwoResult;
};
// const result = addTwoPromises(promise1, promise2);
addTwoPromises(promise1, promise2).then((result) => {
  console.log(result);
});
