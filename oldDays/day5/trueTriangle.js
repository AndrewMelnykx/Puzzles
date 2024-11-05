function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  return a + b > c && a + c > b && b + c > a;
}

// solution from codeWars
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}
