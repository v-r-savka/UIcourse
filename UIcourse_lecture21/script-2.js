'use strict';


String.prototype.myNewMethod = function () {
   return this.toUpperCase();
};

alert('hhh'.myNewMethod())