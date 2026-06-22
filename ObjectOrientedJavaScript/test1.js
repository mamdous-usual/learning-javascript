// this keyword in nodejs (non strict mode)

// console.log(this); // empty object


function displayThis() {
    console.log(this);
}


// displayThis(); // Global object


let myObj = {
    name : "Mamdous",
    age : 20,
    
    myFn1 : function() {
        console.log(this.name);
    }
}


// myObj.myFn1();

let myObj2 = {
    name : "Mamdous",
    age : 20,
    
    myFn2 : function() {
        function myFn3() {
            console.log(this);
        }
        myFn3();
    }
}

myObj2.myFn2();

