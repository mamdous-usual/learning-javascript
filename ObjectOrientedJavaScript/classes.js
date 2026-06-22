class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    welcome() {
        console.log(`Welcome ${this.name}`);
    }
}

let person1 = new Person("Mamdous", 20);
let person2 = new Person("Sia", 19);
let person3 = new Person("Ania", 18);

console.log(person1);
console.log(person2);
console.log(person3);

person1.welcome();
