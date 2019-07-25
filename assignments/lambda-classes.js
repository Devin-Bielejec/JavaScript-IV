// CODE here for your Lambda Classes
//import { randomItemFromArray } from "./prototype-refactor.js";
function randomItemFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
  } 


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

    changeGrade(student) {
        //Assume grade can't be negative or above 100 (cause that's just 100)
        console.log(student.grade);
        const signValue = randomItemFromArray([1,-1]);
        const changeAmount = Math.floor(Math.random()*100-1)*signValue;
        
        if (student.grade + changeAmount < 0){
            student.grade = 0;
    
        } else if (student.grade + changeAmount > 100) {
            student.grade = 100;
        } else {
            student.grade += changeAmount;   
        }
        console.log(student.grade, changeAmount);
        console.log(student.grade);
    }
}



class Student extends Person {
    constructor(attrs) {
        super(attrs),
        this.previousBackground = attrs.previousBackground,
        this.className = attrs.className,
        this.favSubjects = attrs.favSubjects,
        this.grade = attrs.grade
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

    graduate() {
       if (this.grade >= 70) {
        console.log(`Congratulation you graduated!`)
       }
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
    favSubjects: ["Cooking", "Math", "English"],
    grade: (Math.floor(Math.random()*100))
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

//PM 
fred.standUp("Cool Channel");
fred.debugsCode(dave, "Javascript");

//Instructor 
fred.demo("CSS");
fred.grade(dave, "CSS");
fred.changeGrade(dave);
fred.grade(dave, "CSS");
dave.graduate(dave);

//Student 
dave.listsSubjects();
dave.PRAssignment("HTML");
dave.sprintChallenge("CSS");

console.log(dave.grade);

//Person 
dave.speak();
fred.speak();