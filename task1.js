//1
var n=5;
out=(n&1==0)?"even":"odd";
console.log(out);


//2
let num = 7;
console.log((num & 1) === 0 ? "Even" : "Odd"); 

//3

function isEvenOrOdd(num) {
    return (num & 1) === 0 ? "Even" : "Odd";
}

console.log(isEvenOrOdd(4)); 

