/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
    }
        /**
         * Display phrase on game board
         */
    addPhraseToDisplay() {
        this.phrase.split('').forEach( character => {
            const phraseSection = document.querySelector('#phrase ul');
            const listItem = document.createElement('li');
            listItem.innerText = character;
            phraseSection.appendChild(listItem);
            if ( character === ' ') {
                listItem.className = 'space';
            } else {
                listItem.className = `hide letter ${character}`;
            }
        });
    };
        
}