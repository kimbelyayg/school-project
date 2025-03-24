// Node.js program to demonstrate basic operations with arrays

// Array example: numbers = [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];

// Function to sum up the array elements
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(`The sum of all elements in the array is: ${sumArray(numbers)}`);
