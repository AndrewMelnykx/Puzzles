// const text = " my@adrenalin.life";

// const regExp = /^[a-z0-9_]+@[a-z0-9.]+\.[a-z]{2,12}$/;

const link = "http://mygoogle.service.com";
const regExp = /^(http(s?):\/\/[a-z0-9_.]+\.[a-z]{2,12}$)/;
//s - space
//w- [a-z0-9]
//d - [0-9]
//t - enter
// ^ - string start symbol
// $ - end string symbol
// [] - symbols range
// [^] - not ignored symbols
// (?) - optional symbols sign
//(abc?) - says it might be and might not be
//(?<=abc) - expression starts with abc and abc doesn`t count in the output
//(?=abc) - expression ends with abc and abc doesn`t count in the output
//(?:abc) - expression ends with abc and abc will be printed
// + - repeat pattern
// . - find any symbol
//{1,5} - from one to five symbols
//{2,} - two or more
//{abc|def} - find abc or def

// lfag i - ignore capital letter
//flag g - global search

//?!  - exclude pattern
// /\bworld\/ - take only holistic word (worldwide) doesn`t print
// \W - symbols
// \S -  non-space(symbols numbers, letters)
// /w* - Letters (uppercase A-Z and lowercase a-z)
//u is used to specify Unicode characters
// s – DotAll mode (makes . match newlines too).
// y – Sticky search (matches only from lastIndex, does not search ahead).
// d – Returns detailed match information, including indices.
// \t – Matches a tab character.
// \r – Matches a carriage return.
// \n – Matches a newline.
// \v – Matches a vertical tab.
// \0 – Matches a null character (\x00)
// \B - matches not a word boundary

console.log(link.match(regExp));
w;
