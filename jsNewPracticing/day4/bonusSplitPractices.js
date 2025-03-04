let text = "Hello World Welcome";

console.log(text.split("o"));
console.log(text.split(" ", 2));
console.log(text.split(/\s+/));
console.log(text.split("  "));

const sentence = "Js is awesome";

let words = sentence.split(" ");

words[1] = "was";

console.log(words.join(" "));

let hello = "Hello World!";

let withoutExclamation = hello.split(/[\s\W]+/).filter(Boolean);
let simpleWithExcl = hello.split(/[!]+/);

console.log(simpleWithExcl);

let fruits = "apple,banana|grape orange";

let fruitsResult = fruits.split(/[,|]+/);
console.log(fruitsResult);

const allInOnce = fruits.split(/[,|]+/).join("-");

console.log(allInOnce);
