'use strict';


let sortMixin = {
   sortReloaded(dir = 'asc') {
      let sortedArr = [];
      if (dir === 'asc') {
         this.sort((a, b) => a > b ? 1 : -1).filter(num => {
            sortedArr.push(num);
         });
         return sortedArr;
      } else if (dir === 'desc') {
         this.sort((a, b) => b - a).filter(num => {
            sortedArr.push(num);
         })
         return sortedArr;
      } else return false;
   }
}

Object.assign(Array.prototype, sortMixin)
let numbers = [1, 6, 4, 5];

let sortedNumbers = numbers.sortReloaded();
console.log(sortedNumbers);


