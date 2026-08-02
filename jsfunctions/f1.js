function printMe(){
    console.log('I get called from f1.js');    
}
printMe();

function printThis(param){
    console.log(param);
}
printThis();
printThis('This is a parameter passed to printThis function.');
function printThat(param1, param2){
    console.log( param1,"& ", param2);
}
printThat( 'This is param1', 'This is param2');