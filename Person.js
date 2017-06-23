const ages = new WeakMap();
const names = new WeakMap();

module.exports = class Person {
    get name() {
        return names.get(this);
    }

    get age() {
        return ages.get(this);
    }

    constructor(name, age) {
        ages.set(this, age);
        names.set(this, name);
    }

    greet() { }

    sayHello() {
        console.log('Hello,', this.name, 'of', this.age, 'years old');
        this.greet();
    }
}
