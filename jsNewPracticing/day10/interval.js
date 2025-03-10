const interval = setInterval(cb, 0, "first", "second");
console.log(typeof interval);

function cb(a, b) {
  console.log(a);
  console.log(b);
  clearInterval(interval);
}

console.log(typeof interval);
