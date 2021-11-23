'use strict';

class God {
   creation(...name) {
      return [new Man(name[0]), new Woman(name[1])];
   }
}


class Human {

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

let god = new God();

let firstPair = god.creation('Adam', 'Eve');

console.log(firstPair);

