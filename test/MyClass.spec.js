const MyClass = require('../src/MyClass');
const {expect} = require('code');

describe('MyClass', () => {

  it('should be initialized and used as an object', () => {

    const a = new MyClass();

    expect(a).object();

  });

  it('should return `called`', () => {

    const a = new MyClass();

    const aResult = a.callMe();

    expect(aResult).equals('called');

  });

  it('should have same callMe for two objects', () => {

    const a = new MyClass();
    const b = new MyClass();

    expect(a.callMe).equals(b.callMe);

  });

  it('should access prototype function when not there in the object', () => {

    const a = new MyClass();

    expect(a.callMe).equals(a.__proto__.callMe);

  });

  describe('sayHello', () => {

    let a, b;

    beforeEach(() => {

      a = new MyClass('gopi');
      b = new MyClass('prasanna');

    });

    it('should have same sayHello', () => {

      expect(a.sayHello).equals(b.sayHello);

    });

    it('should sayHello to first', () => {

      expect(a.sayHello()).equals('Hello, gopi!');

    });

    it('should sayHello to second', () => {

      expect(b.sayHello()).equals('Hello, prasanna!');

    });

  });

});
