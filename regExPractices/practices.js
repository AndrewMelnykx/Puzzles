const text = "Hello , - World .1234";
// const regexpWithIgnore = /world/i;
// const diapasonLarge = /[abcdefghijklmonpqrst]/;
// const diapasonShort = /[a-z]{1,6}/i;
// const diapasonShortPlus = /[a-z]+/gi;
// const diapasonStar = /[a-z]*/;
// const diapasonNum = /[0-9]+[a-z]+/gi;
// const negativeRegExp = /[^a-z\s,-.+]+/i;
const universalWordExp = /\w+/g; //w - means words
const universalDigExp = /\w+/g; //w - means digits

console.log(text.match(universalWordExp));
