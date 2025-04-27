var uniqueMorseRepresentations = function (words) {
  const morzeAlphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  //   const letters = words.map((word) => word.split(""));
  //   for (let i = 0; i < morzeAlphabet.length; i++) {
  //     for (let j = 0; j < letters[i].length; j++) {
  //       const letter = letters[i][j];
  //       if (morzeAlphabet[letter]) {
  //         letters[i][j] = morzeAlphabet[letter];
  //       }
  //     }
  //   }
  //   return letters.map((morseArray) => morseArray.join(""));

  const morzeWords = words.map((word) =>
    word
      .split("")
      .map((letter) => morzeAlphabet[letter])
      .join("")
  );
  const uniqueMorzeWords = new Set(morzeWords);

  return uniqueMorzeWords.size;
};

const result = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
console.log(result);

var uniqueMorseRepresentations = function (words) {
  const morzeAlphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  //   const letters = words.map((word) => word.split(""));
  //   for (let i = 0; i < morzeAlphabet.length; i++) {
  //     for (let j = 0; j < letters[i].length; j++) {
  //       const letter = letters[i][j];
  //       if (morzeAlphabet[letter]) {
  //         letters[i][j] = morzeAlphabet[letter];
  //       }
  //     }
  //   }
  //   return letters.map((morseArray) => morseArray.join(""));

  const morzeWords = words.map((word) =>
    word
      .split("")
      .map((letter) => morzeAlphabet[letter])
      .join("")
  );
  const uniqueMorzeWords = new Set(morzeWords);

  return uniqueMorzeWords.size;
};

const result = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
console.log(result);
