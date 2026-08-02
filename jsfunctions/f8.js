//callback function

function hello(great) {    
    great();
}


function great() {
    console.log("Hello World");
}
great(); // Calling the great function directly

hello(function(){
    console.log("Hello from the callback function");
});