class Animal {
    
    sound() {
        console.log("Animals make different sounds");
    }
}


class Dog extends Animal{
    
    sound() {
        console.log("Dog Barks");
    }
}



class Cat extends Animal{
    
    sound() {
        console.log("Cat Mews");
    }
}


let animal1 = new Animal();
animal1.sound();

let tommy = new Dog();
tommy.sound();

let percy = new Cat();
percy.sound();
