/*
Nested function function within a function
Closer 
inner function can access variables of outer function and global scope 
Outer function can access variables of outer function and global scope
Outer function cannot access variables of inner function.
*/

let x = 10;
function outerFunction() {
    let y = 20; // This x is local to outerFunction
    function innerFunction() {
        let z = 30;
        let c = 40; // This z is local to innerFunction
        console.log(x);
        console.log(y)
        console.log("This is the inner function.");
        console.log(z);
        console.log(c);
    }
    innerFunction();
    console.log("This is the outer function." , x + y);
    console.log(x + y + z + c); //Closer, This will throw an error because z and c is not defined in this scope
}
outerFunction(); // Outputs: This is the inner function.
console.log(y); //Closer, This will throw an error because y is not defined in this scope
console.log(z); //Closer, This will throw an error because z is not defined in this scope