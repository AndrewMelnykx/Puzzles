// Here is the code with correct syntax formatting for easier reference:

console.log(begins);

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise((resolve, reject) => {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeOut 2 ");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});
