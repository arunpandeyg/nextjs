//default value
function add(a, b = 0) {
    return a + b;
}
console.log(add(5, 3)); // Outputs: 8
console.log(add(5));    // Outputs: 5
// Arrow function
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Outputs: 6
// Function with default parameter
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); // Outputs: 10
console.log(multiply(5));    // Outputs: 5
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet("Alice");
greet();