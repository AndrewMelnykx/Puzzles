var x = new Promise(function (resolve, reject) {
  resolve("resolve");
  reject("reject");
});

const res = x
  .then((x) => console.log("Fulfilled" + "" + x))
  .catch((x) => console.log("Rejected" + "" + x));

console.log(res);

//Exactly find out why you see what you see in console not what you thought to see
