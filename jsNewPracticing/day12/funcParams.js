function func([x = 1, y = 2] = []) {
  console.log(x + y);
}

func([], [2, 3]);
