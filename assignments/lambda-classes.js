// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    }
    Speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location} `)
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    };
    grade(student) {
        console.logs(`${student.name} receives a perfect score on ${subject}`)
    }
    regrade() {
        let passing = (Math.random() * 30) - 15;
        console.log(passing + " points added");
        return passing;
    }
}

class Student extends Instructor{
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className =  attrs.className;
        this.favSubjects = attrs.favSubjects;
        this.grade = attrs.grade;
    }
    listsSubjects(){
        console.log(`My favorite subjects are ${this.favSubject}`)
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge() {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
    graduate() {
        if (grade => 70) {
            return 'Congrats Hector You passed';
        } else return 'You failed loser';
    }
}

class ProjectManager extends Student {
    constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const Hector = new Student({
    name: 'Hector',
    location: 'New York City',
    age: 23,
    previousBackground: 'Uber Driver',
    className: 'Valdez',
    favSubjects: ['Computer Science', 'Gym', 'Lunch'],
    grade: 70
  });

  const NeopoleanHill = new Instructor({
    name: 'Neopolean',
    location: 'New York City',
    age: 87,
    favLanguage: 'JavaScript',
    specialty: 'Back-End',
    catchPhrase: `For every adversity there is a seed of equal or greater opportunity.`
  });

  const GeorgeWashington = new Person({
    name: 'George Washington',
    location: 'Westmoreland County, VA',
    age: 67,
  });

  const DonaldTrump = new ProjectManager({
    name: 'DonaldTrump',
    location: 'New York City',
    age: 73,
    gradClassName: 'CS1',
    favInstructor: 'Twitter'
  });

  const ET = new Person({
    name: 'Eric Thomas',
    location: 'Chicago, IL',
    age: 48,
  });

  const LeBronJames = new ProjectManager({
    name: 'LeBron James',
    location: 'Akron, OH',
    age: 34,
    gradClassName: 'Basketball',
    favInstructor: 'Tyron Lue'
  });

  Hector.Speak();
  NeopoleanHill.Speak();
  console.log(Hector.previousBackground);
  console.log(NeopoleanHill.favLanguage);
  console.log(LeBronJames.favInstructor);
  ET.Speak();
  console.log(DonaldTrump.favInstructor);
  GeorgeWashington.Speak();
  console.log(DonaldTrump.age);
  console.log(GeorgeWashington.location);
  console.log(NeopoleanHill.catchPhrase);
  console.log(Hector.grade);