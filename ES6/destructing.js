// The destructing assignment syntax is a javascript expression that makes it possible to unpack values from arrays, or properties from ojbects, into distinct values

let arr = ["Hi", "I", ,"am", "Mamdous"];

// let a = arr[1];
// let b = arr[2];

// console.log(a);
// console.log(b);


// let [a,b,c,d,e] = arr;

// console.log(a);
// console.log(c);
// console.log(e);

// Destructing objects
let myObj = {
    name : "Mamdous",
    age : 20,
    gender : "M",

    address : {
        county : "Inida",
        state : "Assam",
        City : "Silchar"
    }
};

let {name,age,gender,address} = myObj; // Need exact same name as key 
let {name:n,age:a,gender:g,address:{county}} = myObj; 

console.log(name);
console.log(age);
console.log(gender);
console.log(address)

console.log();


console.log(n);
console.log(a);
console.log(g);
console.log(county);






