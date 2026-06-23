function Person(_name, _age) {
    this.name = _name;
    this.age = _age;
}

Person.prototype.getNameandAge = function() {
        console.log(`I am ${this.name} and my age is ${this.age}`);
}

let person1 = new Person("Mamdous", 20);
let person2 = new Person("Ahmed", 20);

console.log(person1.getNameandAge);
console.log(person2);
