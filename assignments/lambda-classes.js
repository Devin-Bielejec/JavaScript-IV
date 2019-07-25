// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name,
        this.age = attrs.age,
        this.location = attrs.location
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs),
        this.specialty = attr.specialty,
        this.favLanguage = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}


class Student extends Person {
    constructor(attrs) {
        super(attrs),
        this.previousBackground = attrs.previousBackground,
        this.className = attrs.calssName,
        this.favSubjects = attrs.favSubjects
    }

    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
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