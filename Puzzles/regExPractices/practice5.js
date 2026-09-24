const text = `<@Viktor/>Hey team.I would like +38 (050) 552-35-05 to have +38 050 552-35-05 qwer123_aj@gmail.com._12312312312 a call with <@Megan/> at 17:00.<@Mike/>test@test.ua would you join us?`;

const regExp = /(\+?)\d+[0-9\-)(\s]{10,16}(?:\d)/g;
console.log(text.match(regExp));
