let myObj = {
    
}

console.log(myObj);

let person1 = {
    name : "Adam",
    age : 25
}

console.log(person1);
console.log(person1.hasOwnProperty("gender"));

// Constructor function

function Person(_name, _age) {
    this.name = _name;
    this.age = _age;

}

let person2 = new Person("Steve", 30);

console.log(person2);
