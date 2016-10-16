function MyClass(firstName) {

  this.firstName = firstName;

}

MyClass.prototype.callMe = () => 'called';
MyClass.prototype.sayHello = function () {
  return `Hello, ${this.firstName}!`;
};

module.exports = MyClass;
