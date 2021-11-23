'use strict';



class Cuboid {
   constructor(length, width, height) {
      this.length = length;
      this.width = width;
      this.height = height;
   }

   getSurfaceArea() {
      let surfaseArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      return this.surfaceArea = surfaseArea;
   }

   getVolume() {
      let volume = (this.length * this.width * this.height);
      return this.volume = volume;
   }
}

class Cube extends Cuboid {
   constructor(length) {
      super();
      this.length = length;
      this.width = length;
      this.height = length;
   }
}

let paralelogram = new Cuboid(3, 5, 7);
let cube = new Cube(3);

console.log(paralelogram);
console.log(cube);

alert(paralelogram.getSurfaceArea());
alert(paralelogram.getVolume());

alert(cube.getSurfaceArea());
alert(cube.getVolume());