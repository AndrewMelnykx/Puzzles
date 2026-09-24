const piles = [1, 4, 3, 2];
const h = 9;

function bananasPerHourCounter(piles, h) {
  let count = 0;
  for (let i = 0; i < piles.length; i++) {
    while (piles[i] >= 0) {
      for (let j = 1; j < piles.length; j) {
        if (piles[i] - j <= 0) {
          count++;
        }
        if (count > 9) {
          j++;
          count = 0;
        }
      }
    }
  }
  return count;
}

// gpt solution

function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours > h) {
      left = mid + 1; // need to eat faster
    } else {
      right = mid; // try a slower speed
    }
  }

  return left;
}

function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }
    if (hours > h) {
      let = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }
    if (hours > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

const result = minEatingSpeed(piles, h);
console.log(result);
