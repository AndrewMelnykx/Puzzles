const text = `<@Viktor/>Hey team.I would like to have qwer123_aj@gmail.com._12312312312 a call with <@Megan/> at 17:00.<@Mike/>test@test.ua would you join us?`;
const regExp = /[a-z0-9_]+@[a-z0-9_.]+\.[a-z]{2,12}/g;

console.log(text.match(regExp));
