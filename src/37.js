function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1 || n === 2) {
    return [0, 1];
  }

  let fib = [0, 1];

  for (let i = 3; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(10));
