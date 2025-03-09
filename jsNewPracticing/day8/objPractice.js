const obj = {};

obj.name = "Mario";

obj.age = "old";

let key = "hobby";

obj[key] = "soccer";

Object.assign(obj, { height: 190 });

let person = { name: "Semen" };
person = { ...person, nationality: "USA" };

Object.defineProperty(person, "age", {
  value: 30,
  writable: true,
  enumerable: true,
});

Object.defineProperty(person, "age", {
  value: 30,
  enumerable: true,
  writable: true,
});

console.log(obj);
console.log(person);

const loopObj = (obj) => {
  for (key in obj) {
    console.log(key + ":" + obj[key]);
  }
};

loopObj(obj);
