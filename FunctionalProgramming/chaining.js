let arr = [
    {name : "A", age: 14, gender: "M"},
    {name : "B", age: 34, gender: "M"},
    {name : "C", age: 27, gender: "F"},
    {name : "D", age: 20, gender: "M"},
    {name : "F", age: 22, gender: "F"},
    {name : "G", age: 44, gender: "F"},
    {name : "H", age: 54, gender: "M"},
    {name : "I", age: 17, gender: "F"}
];

// Age of all Men(Males)

let maleAges = arr.filter(function(obj) {
    return obj.gender == "M";
}).map(function(male) {
    return male.age;
});

// let agesOfMales = males.map(function(male) {
   // return male.age; 
// });

console.log(maleAges);


// Q. From the transactions array filer out the positive elements and calculate the total amount -> use filter and reduce to achieve this

 
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let res = transactions.filter(function(n) {
    return n > 0;
}).reduce(function(acc, value) {
    let sum = acc  + value;
    return  sum;
}, 0);

console.log(res);
