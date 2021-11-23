'use strict';



function giveLineNumber(strings) {
   let numberedLine = strings.map((str, index) => {
      return str = index + 1 + ': ' + str;
   });
   return numberedLine;
}

let strings = ['a', 'b', 'c'];
let stringsWithNumber = giveLineNumber(strings);

stringsWithNumber.forEach(str => {
   alert(str);
});



