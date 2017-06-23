let _name;

module.exports = {
    get name() {

        return _name;

    },
    set name(name) {

        _name = name;

    },
    sayHello() {

        console.log('Hello, ' + _name);

    }
};
