// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name,
        this.age = attrs.age,
        this.location = attrs.location
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs)
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs)
    }
}

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});