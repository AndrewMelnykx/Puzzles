function validatePIN(pin) {
  return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
}

const result = validatePIN("12345");
console.log(result);
