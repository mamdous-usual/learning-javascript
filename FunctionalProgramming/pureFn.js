


var a = 2;

// Impure function
function addImpure(x) {
    console.log(x+a);
    a++;
}

addImpure(2);


addImpure(2);

addImpure(2);

// Pure function
function addPure(x, a) {
    return x + a;
}

console.log(addPure(5,4));


