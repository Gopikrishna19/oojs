const Person = require('./Person');

class Student extends Person {
    greet() {
        console.log('Good morning, teacher!');
    }
}

class Teacher extends Person {
    greet() {
        console.log('Good morning, students!');
    }
}

module.exports = {
    Person,
    Student,
    Teacher
};
