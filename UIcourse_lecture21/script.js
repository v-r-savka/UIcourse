'use strict';

class Singleton {
   constructor() {
      if (!Singleton.instance) {
         Singleton.instance = this;
      }
      return Singleton.instance;
   }
}


let obj1 = new Singleton();
let obj2 = new Singleton();

obj1.name = 'pete';

console.log(obj2.name);
console.log(obj1);
console.log(obj2);