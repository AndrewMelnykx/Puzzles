const text = "Hello , - World1234";

// const regExp = /(?<=\s)\[a-z0-9](?:\w)/i;
// const regExpTwoSample = /\s[a-z0-9](?:\w)/i;
// const regExpThreeSample = /(?<=\s)[a-z]+(?:\w)/i;
const helloWorld = /[a-z]+(?:[a-z])/gi;

console.log(text.match(helloWorld));
