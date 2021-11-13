'use strict';


function getGuestsage(guests) {
   let guestsAge = [];
   guests.filter(guest => guestsAge.push(guest.age));
   return guestsAge;
}

function findHighestAge(ages) {
   return Math.max(...ages);
}

function findOldestGuest(guests) {
   return guests.filter(guest => {
      if (guest.age === findHighestAge(getGuestsage(guests)))
         return guest;
   })
}



let guests = [
   {
      firstName: 'Gabriel',
      lastName: 'X.',
      country: 'Monaco',
      continent: 'Europe',
      age: 49,
      language: 'PHP'
   },
   {
      firstName: 'Odval',
      lastName: 'F.',
      country: 'Mongolia',
      continent: 'Asia',
      age: 38,
      language: 'Python'
   },
   {
      firstName: 'Emilija',
      lastName: 'S.',
      country: 'Lithania',
      continent: 'Europe',
      age: 19,
      language: 'Python'
   },
   {
      firstName: 'Sou',
      lastName: 'B.',
      country: 'Japan',
      age: 49,
      language: 'PHP'
   },
]

let theOldestGuest = findOldestGuest(guests);

alert(theOldestGuest[0].lastName);
alert(theOldestGuest[1].lastName);





