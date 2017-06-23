function Person() {

    function _Person(name, age) {

        Object.defineProperties(this, {
            name: {
                writable: false,
                value: name
            },
            age: {
                writable: false,
                value: age
            }
        });

    };

    Object.defineProperties(_Person.prototype, {
        sayHello: {
            value: function () {
                console.log('Hello,', this.name, 'of', this.age, 'years old');
            }
        }
    });

    return _Person;

}

function Student() {

    function _Student(...args) {
        Person.call(this, ...args);
    }

    _Student.prototype = Object.create(Person.prototype, {
        greet: {
            value: function () {
                console.log('Good morning, teacher!');
            }
        }
    })


    return _Student;

}

function Teacher() {

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

    return Teacher;

}

module.exports = {
    Person,
    Student,
    Teacher
};
