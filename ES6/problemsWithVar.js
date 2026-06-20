//var a = 21;

var a = 35; // redecalration with varialbe

//console.log(a);

if(a===35) {
    var b = 40;
    console.log(b);
}

// Variable declared with var keyword are not blocked scoped they are funcion scoped
console.log(b); // Accessing a variable outside of the function block -> Scoping issue

function test() {
    var c = 100;
    console.log(c);
}

test();

console.log(c);
