'use strict';

const slider = document.getElementById('slider');
const thumb = document.getElementById('thumb');



function onMouseDown(e) {
   e.preventDefault();


   // !відстань від курсора до лівої сторони ел-та
   let shiftX = e.clientX - thumb.getBoundingClientRect().left;


   function onMouseMove(e) {

      //задаємо нові координати і враховуємо початковий  зсув відносно курсору (shiftx )
      let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left;

      // щоб ел-нт не втікав вліво і вправо
      if (newLeft < 0) {
         newLeft = 0;
      }
      let rightEdge = slider.offsetWidth - thumb.offsetWidth;
      if (newLeft > rightEdge) {
         newLeft = rightEdge;
      }
      thumb.style.left = newLeft + 'px';
   }

   function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
   }

   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);

   //затираємо стандартний Ddrop
   thumb.ondragstart = function () {
      return false;
   };
}

thumb.addEventListener('mousedown', onMouseDown);
