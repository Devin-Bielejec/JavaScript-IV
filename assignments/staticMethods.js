/* 
static method ----- instead of 

static methods are methods that can be called without instantiating the class instelf

they're useful because:

static methods don't go to the instances of the class you create




*/


class Person {
    constructor(details) {
    }

    static chicken() {
        console.log("Chicken");
    }
}

Person.chicken();

let devin = new Person;
devin.chicken();