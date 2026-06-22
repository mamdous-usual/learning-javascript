class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    welcome() {
        console.log(`Welcom ${this.name}`);
    }
}

class Teacher extends Person {
    constructor(_name, _age, _classStrength) {
        super(_name, _age);
        this.classStrength = _classStrength;
    }

    test() {
        super.welcome();
    }
}

class Student extends Person {
    constructor(_name, _age, _cgpa) {
        super(_name, _age,);
        this.cgpa = _cgpa;
    }
}

let person1 = new Person("Adam", 20);
let teacher1 = new Teacher("Eve", 29, 50);
let student = new Student("Ana", 19, 8.95);

// console.log(person1);
// console.log(teacher1);
// console.log(student);

teacher1.test(); 
