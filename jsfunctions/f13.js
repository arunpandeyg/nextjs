//recursion base condition

function run(){
    console.log("f13.js is running");
    //run(); 
    // Uncommenting the above line will cause infinite recursion
    // To avoid infinite recursion, we can use a condition to stop it   
}    
   run();

function fireBrahmosh(count){
   if (count === 0) {
       console.log("Preparing to Fire BrahMosh missile");
   } else {
       console.log("Firing BrahMosh missiles");
       fireBrahmosh(count - 1);
   }
}
fireBrahmosh(5);