/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [new Phrase('there is no place like home'),
                        new Phrase('just keep swimming'),
                        new Phrase('there is no crying in baseball'),
                        new Phrase('to infinity and beyond'),
                        new Phrase('you are killing me smalls')
                    ];
        this.activePhrase = null;
    }
        /**
         * Selects random phrase from phrases property
         *  @return {Object} Phrase object chosen should be used
         */
    getRandomPhrase(){
        return this.phrases[ Math.floor( Math.random() * this.phrases.length ) ];
        
    }
}