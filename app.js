function hello() {
    console.log("hello world");
}
hello();
function printname() {
    console.log("mamali");
}
printname();

function print1to5(){
    for(i=1; i<=5; i++) {

        console.log(i);
    }
        
}
print1to5();

function adult() {
    let age =18;
    if(age>=18) {
        console.log("eligble for voting.");
    }
    else{
        console.log("not eligble");
    }
}
adult();

function poem() {
    console.log("twinkle twinkle little star");
}
poem();

function rolldice(){
    let rolled = Math.floor(Math.random() * 6) + 1;
    
    console.log("the final value is",rolled );


}
rolldice();