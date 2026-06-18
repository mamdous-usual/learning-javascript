// in js objects are key value pair

var person = {
    firstName : "Mamdous",
    lastName : "Laskar",
    age : 20,
    ownsCar : false
};

console.log(person); 

// dot notation -> for accessing values 
console.log(person.age);

// bracket notation
console.log(person["firstName"]);



var cap = {
    firstName : "Steve",
    lastName : "Rogers",
    age : 102, 

    friends : ["Bucky Barns", "Bruce Banner", "Tony Stark"],

    isAvenger : true,

    address : {
        state : "New York",
        city : {
            name : "Brooklyn",
            postalcode : "12345786"
        }
    }
}

console.log(cap.friends[1]);


console.log(cap.address.city.name); // Brooklyn

cap.isAvenger = false;

console.log(cap.isAvenger)

// adding things from outside

cap.movies = ["Age of Ultron", "Civil War", "First Avenger"];

console.log(cap);

// delete property
delete cap.age;

console.log(cap);
