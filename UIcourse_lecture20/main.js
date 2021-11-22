'use strict';


class Human {
   creation(...name) {
      return [new Man(name[0]), new Woman(name[1])]
   }
}

class Man extends Human {
   constructor(name) {
      super();
      this.name = name;
   }
}

class Woman extends Human {
   constructor(name) {
      super();
      this.name = name;
   }
}

let humanity = new Human;

let adamAndEve = humanity.creation('Adam', 'Eve');

console.log(adamAndEve);

