// Node.js code to find the maximum value in an array

function findMaxValue(numbers) {
  if (numbers.length === 0) {
    throw new Error('Array is empty');
  }
  
  let max = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  
  return max;
}

// Example usage
const numbersArray = [3, 5, 7, 9, 2, 4, 8, 6, 10, 1];
console.log(findMaxValue(numbersArray));
