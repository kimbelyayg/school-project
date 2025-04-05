function calculateAverage(numbers) {
  if (numbers.length === 0) return null;

  const sum = numbers.reduce((acc, val) => acc + val, 0);

  return sum / numbers.length;
}

console.log(calculateAverage([2.5, 3.6, 4.1, 5.7]));
