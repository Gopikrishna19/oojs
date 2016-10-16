const MyArray = require('../src/MyArray');
const {expect} = require('code');

describe('MyArray', () => {

  let a;

  beforeEach(() => {

    a = new MyArray();

  });

  it('should be initialized and used as an object', () => {

    a.aValue = 123;

    expect(a).object();
    expect(a.aValue).equals(123);

  });

  it('should work like a normal array', () => {

    a.push(1, 2, 3, 4);

    expect(a.length).equals(4);
    expect(a).equals([1, 2, 3, 4]);

  });

  it('should sum all the values', () => {

    a.push(1, 2, 3, 4);

    expect(a.sum()).equals(10);

  });

  it('should return unique values from an array', () => {

    a.push(1, 1, 2, 3, 4, 4, 4, 5);

    expect(a.unique()).equals([1, 2, 3, 4, 5]);

  });

  it('should return unique values from any order', () => {

    a.push(1, 2, 1, 4, 4, 3, 4, 5);

    expect(a.unique()).equals([1, 2, 4, 3, 5]);

  });

  it('should return elaborate string value for the array', () => {

    a.push({}, () => {}, 1, "string", true);

    const expectedString = [
      'Value at 0: [object Object], of type object',
      'Value at 1: () => {}, of type function',
      'Value at 2: 1, of type number',
      'Value at 3: string, of type string',
      'Value at 4: true, of type boolean',
    ].join(', ');

    expect(a.toString()).equals(expectedString);
    expect('' + a).equals(expectedString);

  });

});
