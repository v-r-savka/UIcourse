'use strict';

function makeClass(...properties) {
   let count = 0;
   return class newClass {
      constructor(...values) {
         for (let arg of properties) {
            this[arg] = values[count];
            count++;
         }
      }
   }
}

const Animal = makeClass('name', 'species', 'age', 'health', 'weight', 'color');

const rabbit = new Animal('White rabbit',
   'rabbit',
   2,
   'good',
   '3 kg',
   'white',
);

console.log(rabbit);

