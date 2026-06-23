let person1 = {
    firstName : "Steve",
    lastName : "Rogers",
    age : 102,
}

printDetails = function(city, power) {
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city} and I have ${power}`);
 }

let person2 = {
    firstName : "Tony",
    lastName : "Stark",
    age : 41
}

// Call
printDetails.call(person2, "New York", "Iron man Armour");

// Apply -> Needs array []
printDetails.apply(person1, ["New York", "super human strength"]);

// bind method -> allows to bind the function to a variable
let fun = printDetails.bind(person2, "New York", "Iron man Armour");
console.log(fun);
fun();



