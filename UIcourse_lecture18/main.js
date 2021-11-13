'use strict';



class Song {
   constructor(title, artist) {
      this.title = title;
      this.artist = artist;
      this.alreadyListened = new Set();
   }

   howMany(listeners) {
      let lowerCaseListeners = listeners.map(listener => listener.toLowerCase());
      lowerCaseListeners.filter(listener => this.alreadyListened.add(listener));

      let amountOfListeners = this.alreadyListened.size;
      return amountOfListeners;
   }
}


let firstSong = new Song('Believer', 'Imagine Dragons');

firstSong.howMany(['Ann', 'Vasyl', 'OlEg']);
firstSong.howMany(['John', 'VasyL', 'Oleg']);
firstSong.howMany(['ANn', 'John', 'Oleg']);

alert(firstSong.howMany(['Ann', 'VaSyl', 'OleGuk']));
alert(firstSong.alreadyListened.size);
