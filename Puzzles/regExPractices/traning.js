// const text =
//   "Hello world! My email is test@example.com and my user123 name is valid. But #hashTag and $money should match!";

// // const regex = /(\s\@[a-z]\.{3,}+\s\w)/;
// // const regexWords = /\b\w*[\$%\#\&\*\!\(\)]\w*\b/g;
// // const wordsWithSigns = /(?:\S*^[#$%\&\*\!\(\)]+\S*)/g;

// // const regex = /[a-z0-9._]+@[A-Za-z.]+\.[a-zA-Z]{2,}+[a-z0-9$%#]/g;
// // const wordsWithSigns = /\b[#\$%&*!()]\w*\b/gi;

// const allWithSyms =
//   /\b[#\$%&*()]\w*\b |\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

// console.log(text.match(allWithSyms));

const text = `The main server at 192.168.1.1 responded quickly, while the backup at 999.999.999.999 was unreachable.`;
const regex =
  /\b((25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(25[0-5]|2[0-4]\d|[01]?\d?\d)\b/g;

const regex1 = `\\b((25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\b`;

const check = new RegExp(regex1, "gi");

console.log(text.match(check));
