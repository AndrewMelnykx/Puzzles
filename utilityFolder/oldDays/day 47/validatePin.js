const validatePIN = (pin) => {
  if ((pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin)) {
    return true;
  }
  return false;
};
const result = binaryArrayToNumber("12345");
console.log(result);
