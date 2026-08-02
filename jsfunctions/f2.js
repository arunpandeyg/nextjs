const count =100;
function printCount() {
    console.log(`Count is: ${count}`);
}
printCount();

function printCountAgain() {
    console.log(`Count again is: ${count}`);
}
printCountAgain();

function printCountWithParam(param) {
    console.log(`Count with param is: ${count}, and param is: ${param}`);
}
printCountWithParam('This is a parameter passed to printCountWithParam function.');
function printCountWithTwoParams(param1, param2) {
    console.log(`Count with two params is: ${count}, param1 is: ${param1}, and param2 is: ${param2}`);
}
printCountWithTwoParams('This is param1', 'This is param2');