const text =
  "Hello world! My email is test@example.com and my user123 name is valid. But #hashTag and $money should match!";

// const regex = /(\s\@[a-z]\.{3,}+\s\w)/;
// const regexWords = /\b\w*[\$%\#\&\*\!\(\)]\w*\b/g;
// const wordsWithSigns = /(?:\S*^[#$%\&\*\!\(\)]+\S*)/g;

// const regex = /[a-z0-9._]+@[A-Za-z.]+\.[a-zA-Z]{2,}+[a-z0-9$%#]/g;
// const wordsWithSigns = /\b[#\$%&*!()]\w*\b/gi;

const allWithSyms =
  /\b[#\$%&*()]\w*\b |\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

console.log(text.match(allWithSyms));
