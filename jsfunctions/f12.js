//call Stack

function f12() {
    console.log("f12");
    
}

function f13() {
    console.log("f13");
     f12();
}

function f14() {
    console.log("f14");
    f13(); 
}   

f14();