class Person {
  constructor(name, quirkyFact, age) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.age = age;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact} and I am ${this.age} years old!`;
  }
}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }

  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

const studentOne = new Student("Hoang", "Likes to yell on mountains!", "29");
console.log(studentOne.bio())

const mentorOne = new Mentor("John", "Isn't a Smith", "22")
// console.log(mentorOne)

const bob = new Mentor("Bob Ross", "I love mountains way too much", "20");
console.log(bob.bio())
