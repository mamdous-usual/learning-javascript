function Person(_name, _age) {
    let name = _name;
    let age = _age;

    this.getName = function() {
        return name;
    }

    this.getAge = function() {
        return age;
    }
}

let person1 = new Person("Mamdous", 20);

console.log(person1.getName());
