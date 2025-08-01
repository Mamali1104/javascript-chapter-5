function printname(name) {
    console.log(name);
}
printname("mama");



function printinfo(name,age) {
    console.log(`${name}'s age is ${age}` );
}
printinfo("Mama", 20);
printinfo("dudu", 20);
printinfo(6 );




function sumof(a,b) {
    console.log(a+b);
}
sumof(1,7);






function calcAvg(a,b,c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}
calcAvg(3,6,3);





function table(usernum) {
    usernum = prompt("enter the number");
    for (i=1; i<=10; i++) {
        console.log(i*usernum);    //block scope.
    }
}
table(6);





//return...
let sum =76;        //global scope
function sumof(a,b) {
    console.log("heloo world..");
    console.log("heloo world..");
 //   let sum= a+b;   //function scope
    return a + b;
    console.log("heloo world..");
    console.log("heloo world..");
}
let s =sumof(3,4);
console.log(s);
// console.log(sumof(3,4));
console.log(sumof(sumof(3,7) ,6));      //adding 6 in last by mergung two sumof functions..






function adult(age) {


    if(age>= 18) {

        return"adult";
    }
    else {

        return "not adult";
    }
    console.log("finished");
}
adult(6);







function calsum(n) {
    let sum =0;
    for (i=1;i<=n;i++) {

        sum = sum + i;
    }
    return sum;

}
calsum(7);








let arr=["bubu","love","dudu"];
function conarr( arr) {
    let result ="";
    for (i=0; i< arr.length;i++) {
        result += arr[i];
    }
    return result;
}






//lexical scope
function outter(){
    let x=3;
    let y= 4;
    function innerfunction() {
        let a =10;
        console.log(x);
        console.log(y);
    }
    console.log(a);
    innerfunction();
}




//practice question

let greet = "hello";
function changeGreet() {
    let greet = "nameste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
    innerGreet();
}
console.log(greet);
changeGreet();






