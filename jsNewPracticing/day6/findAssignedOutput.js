const object = Object.create(
  { subject: "javascript" },
  {
    lesson: { value: "Object Assign", enumerable: true },
  }
);

const copy = Object.assign({}, object);
console.log(object.propertyIsEnumerable("lesson"));

console.log(copy);
