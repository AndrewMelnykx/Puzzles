function high(x) {
  const words = x.split(" ");

  const alphabetScores = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const wordScore = (word) => {
    return word
      .split("")
      .reduce((acc, letter) => acc + alphabetScores[letter], 0);
  };
  let highestScoringWord = "";
  let highestScore = 0;
  for (let word of words) {
    const score = wordScore(word);
    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }
  }
  return highestScoringWord;
}

const result = high("man i need a taxi up to ubud");
console.log(result);
