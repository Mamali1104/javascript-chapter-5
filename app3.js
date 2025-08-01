let sum = function(a,b) {
    return a+b ;
}
let hello = function() {
    console.log("hello");
}
//higher order function..


function multiplegreet(func,count) {
    for(i=1;i<=count;i++) {
        func()
    }
}
let greet = function() {
    console.log("hello");
}   
multiplegreet(greet,7); 


//odd even factory in higher order function..

let odd = function(n) {
    console.log(!(n%2 == 0));
}

let even = function(n) {
    console.log((n%2 == 0));
}

function OddOrEvenFactory(request) {
    if(request=="odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;

    } else if (request == "even") {
        let even = function(n) {
            console.log((n%2 == 0));
        }
        return even;

    } else {
        console.log("wrong reqest");
    }

}

let request= "odd";


//calculater

const calculater = {
    num: 55,
    add:function(a,b) {
        return a + b;
    },
    sub:function(a,b) {
        return a - b;
    },
    mul:function(a,b) {
        return a * b;
    }
};