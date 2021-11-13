'use strict';


class DataStructure {
   constructor() {
      this.dataBase = [];
   }

   addWord(str) {
      return this.dataBase.push(String(str));
   }

   search(string) {
      let reg = new RegExp('^' + string + '$');
      return Boolean(this.dataBase.find(str => reg.test(str)));
   }
}

const dataBase = new DataStructure();

dataBase.addWord('pen');
dataBase.addWord('dad');
dataBase.addWord('bad');
dataBase.addWord('ann');
console.log(dataBase.search('an.'));
console.log(dataBase.search('.a.'));

console.log(dataBase.dataBase[0]);
