'use strict';


class Person {
   constructor(name) {
      this.name = name
   }

   greet(name) {
      return `Hello ${name}, my name is ${this.name}`
   }
}

let john = new Person('John');
alert(john.greet('Kate'));