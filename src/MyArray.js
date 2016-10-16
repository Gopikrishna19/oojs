// sum
// unique
// toString

function MyArray() {
  Array.call(this);
}

MyArray.prototype = Object.create(Array.prototype);
MyArray.prototype.sum = function () {

  return this.reduce((total, currentValue) => total + currentValue, 0);

};
MyArray.prototype.unique = function () {

  const unique = [];

  this.forEach(currentValue => {

    if(unique.indexOf(currentValue) < 0) {
      unique.push(currentValue);
    }

  });

  return unique;

};
MyArray.prototype.toString = function () {

  const stringValues = this.map((currentValue, index) =>
    `Value at ${index}: ${currentValue}, of type ${typeof currentValue}`
  );

  return stringValues.join(', ');

};

module.exports = MyArray;
