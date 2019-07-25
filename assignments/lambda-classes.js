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
        this.specialty = attrs.specialty,
        this.favLanguage = attrs.favLanguage,
        this.catchPhrase = attrs.catchPhrase
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
        this.className = attrs.className,
        this.favSubjects = attrs.favSubjects
    }

    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs),
        this.gradClassName = attrs.gradClassName,
        this.favInstrucor = attrs.favInstrucor
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const dave = new Student({ //second highest parent
    name: 'Dave',
    location: 'Bedrock',
    age: 37,
    previousBackground: 'Teacher',
    className: 'WEB22',
    favSubjects: ["Cooking", "Math", "English"]
});

const fred = new ProjectManager({ //highest parent
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'GradClass#1',
    favInstrucor: 'Britt'
});

//PM methods
fred.standUp("Cool Channel");
fred.debugsCode(dave, "Javascript");

//Instructor methods
fred.demo("CSS");
fred.grade(dave, "CSS");

//Student methods
dave.listsSubjects();
dave.PRAssignment("HTML");
dave.sprintChallenge("CSS");

//Person Methods
dave.speak();
fred.speak();