var a = 20;
var a = 35;

// Solution of the redecalration problem
let b = 30;
b = 49;
//let b = 45; // This will throw an error

console.log(a);
console.log(b);

// Solution of scope problem
if(a===35) {
    let c = 40;
    console.log(c);
}
    
// Variables declared with var keyword are not blocked Scoped they are function scoped

// Varibles declared with var keyword are block scoped


//console.log(c);
