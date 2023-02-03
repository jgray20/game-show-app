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
                listItem.className = 'hide space';
            } else {
                listItem.className = `hide letter ${character}`;
            }
        });
    };

        /**
        * Checks if passed letter is in phrase
        * @param (string) letter - Letter to check
        */
     checkLetter(letter) {
        return this.phrase.includes(letter);
    };

        /**
        * Displays passed letter on screen after a match is found
        * @param (string) letter - Letter to display
        */
    showMatchedLetter(letter) {
        const buttons = document.getElementsByClassName('key');

        for (let i = 0; i < buttons.length; i++){

            if ( letter === buttons[i].innerHTML ) {
                buttons[i].removeClass('hide');
                buttons[i].addClass('show');
            }
        };
        
    };
                
    }