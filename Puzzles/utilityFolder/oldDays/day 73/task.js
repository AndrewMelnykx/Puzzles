function declareWinner(fighter1, fighter2, firstAttacker) {
  let firstFighterHealth = fighter1.health;
  let secondFighterHealth = fighter2.health;
  const firstFighterDamage = fighter1.damagePerAttack;
  const secondFighterDamage = fighter2.damagePerAttack;

  while (firstFighterHealth > 0 && secondFighterHealth > 0) {
    if (firstAttacker === fighter1.name) {
      secondFighterHealth -= firstFighterDamage;
      if (secondFighterHealth <= 0) {
        return fighter1.name;
      }
      firstFighterHealth -= secondFighterDamage;
      if (firstFighterHealth <= 0) {
        return fighter2.name;
      }
    } else {
      firstFighterHealth -= secondFighterDamage;
      if (firstFighterHealth <= 0) {
        return fighter2.name;
      }
      secondFighterHealth -= firstFighterDamage;
      if (secondFighterHealth <= 0) {
        return fighter1.name;
      }
    }
  }
}

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}
const result = declareWinner(
  new Fighter("Lew", 10, 2),
  new Fighter("Harry", 5, 4),
  "Lew"
);
console.log(result);
