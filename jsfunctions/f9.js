//HeighOrder function
// High order function that takes a callback function as an argument
// and executes it.
// hof may return a function that can be called later
// Example of a high order function that takes a callback function  
function highOrderFunction(callback) {
    console.log("Executing high order function");
    callback();
}
// Callback function
function callbackFunction() {
    console.log("This is the callback function");
}
highOrderFunction(callbackFunction);    

function getStart(run) {
    console.log("Start function executed");
    run();
}

// Function to be passed as a callback
getStart(function() {
    console.log("Run function executed");
});