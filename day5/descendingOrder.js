function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
const result = descendingOrder(25431);
console.log(result);

//solution from codeWars

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}
