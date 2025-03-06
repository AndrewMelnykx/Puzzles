const nanObject = Object.is(NaN, NaN);
const stringObject = Object.is("Test", "Test");
const bothAreObjects = Object.is({ key: 1 }, { key: 1 });
const undefinedObject = Object.is(undefined, undefined);

console.log(undefinedObject);
