function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 1; i <= nFloors; i++) {
    const stars = "*".repeat(2 * i - 1);
    const spaces = " ".repeat(nFloors - i);
    tower.push(spaces + stars + spaces);
  }

  return tower;
}
console.log(towerBuilder(6));
