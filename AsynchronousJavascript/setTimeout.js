// setTimeout(cb, 2000);

console.log("Before");
function greet() {
    console.log("Hello from setTimeout");
}

setTimeout(greet, 2000);

console.log("After");