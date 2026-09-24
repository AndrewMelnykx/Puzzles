"use-strict";

const obj = {
  name: {},
};

Object.freeze(obj);

obj.name.firstName = "Test";

console.log(obj.name.firstName);

const obj1 = {
  rating: 9,
  language: "javascript",
};

obj1.language = "angular";

delete obj1.rating;

console.log(obj1);

Object.freeze(obj1);

obj1.language = "TypeScript";

console.log(obj1);
