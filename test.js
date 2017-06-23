// const Interface = require('./object');
// const {Person, Student, Teacher} = require('./constructor');
const { Person, Student, Teacher } = require('./class');

const s = new Student('Prasanna', 20);
const t = new Teacher('Krishna', 22);
const p = new Person('Gopi', 23);

s.name = 'Sathya';

s.sayHello()
t.sayHello()
p.sayHello()


class RSS {

    contructor(feedUrl) {

    }

    parse() {

        //fetch, and convert xml to json

        return this;

    }

    render() {

        // convert json to html dom
        // return dom

    }
}

hindu = new RRS('hindu')
toi = new RRS('timesOfIndia')

Body.append(hindu.parse().render())
Body.append(toi.parse().render())
