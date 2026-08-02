//rest parameter
function addNumbers(x, ...numbers) {
    return numbers.reduce((sum, num) => sum + num, x);
}
console.log(addNumbers(5, 1, 2, 3)); // Outputs: 11

// Using rest parameter with destructuring
function logDetails({ name, age, ...rest }) {
    console.log(`Name: ${name}, Age: ${age}`);
    console.log('Other details:', rest);
}   
logDetails({ name: 'Alice', age: 30, city: 'New York', occupation: 'Engineer' });

// Using rest parameter in a function that accepts multiple arguments
function collectArgs(...args) {
    console.log('Collected arguments:', args);
}
collectArgs(1, 2, 3, 4, 5);
// Using rest parameter with arrow function
const multiply = (...factors) => factors.reduce((product, factor) => product * factor, 1);
console.log(multiply(2, 3, 4)); // Outputs: 24  
// Using rest parameter with a callback function
function processNumbers(callback, ...numbers) {
    const result = numbers.map(callback);
    console.log('Processed numbers:', result);
}
processNumbers(num => num * 2, 1, 2, 3, 4, 5);
// Using rest parameter with a class method
class Calculator {
    sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
}
const calculator = new Calculator();
console.log(calculator.sum(1, 2, 3, 4, 5)); 

// Using rest parameter with a function that returns an array
function createArray(...elements) {
    return elements;
}
const array = createArray(1, 2, 3, 4, 5);
console.log(array); // Outputs: [1, 2, 3, 4, 5]