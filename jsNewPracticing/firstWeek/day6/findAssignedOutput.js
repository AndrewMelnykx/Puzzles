const object = Object.create(
  { subject: "javascript", enumerable: true },
  {
    lesson: {
      value: "Object Assign",
      enumerable: true,
      writable: true,
      configurable: true,
    },
  }
);

const copy = Object.assign({}, object);
console.log(object.propertyIsEnumerable("lesson"));

console.log(copy);
