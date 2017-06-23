function Person(name, age) {

    Object.defineProperties(this, {
        name: {
            get: function () {
                return name;
            },
            set: function (_name) {
                name = _name;
            }
        },
        age: {
            get: function () {
                return age;
            }
        }
    });

};

Object.defineProperties(Person.prototype, {
    sayHello: {
        value: function () {
            console.log('Hello,', this.name, 'of', this.age, 'years old');
        }
    }
});

function Student(...args) {
    Person.call(this, ...args);
}

Student.prototype = Object.create(Person.prototype, {
    greet: {
        value: function () {
            console.log('Good morning, teacher!');
        }
    }
})

function Teacher(...args) {
    Person.call(this, ...args);
}

Teacher.prototype = Object.create(Person.prototype, {
    greet: {
        value: function () {
            console.log('Good morning, students!');
        }
    }
})

module.exports = {
    Person,
    Student,
    Teacher
};
