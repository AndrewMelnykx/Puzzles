function arithmetic(a, b, operator) {
  let sum;
  switch (operator) {
    case "add":
      {
        return (sum = a + b);
      }
      break;
    case "subtract":
      {
        return (sum = a - b);
      }
      break;
    case "multiply":
      {
        return (sum = a * b);
      }
      break;
    case "divide": {
      return (sum = a / b);
    }
  }
  return sum;
}
