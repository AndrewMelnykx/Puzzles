function returning(x) {
  if (x <= 1) {
    returning(x + 1);
    console.log("x in if block is", x);
  } else if (x >= 10000) {
    console.log("x in else block if is" + x);
  }
  returning(x + 1);
}

returning(0);
