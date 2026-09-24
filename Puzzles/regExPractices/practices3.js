const text = `<@Viktor/>Hey team.I would like to have a call with <@Megan/> at 17:00.<@Mike/>would you join us?`;
console.time("regExp");
const regExp = /(?<=<@)\w+(?=\/)/g;
console.log(text.match(regExp));
console.timeEnd("regExp");
