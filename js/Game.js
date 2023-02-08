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
         * Begins game by selecting a random phrase and displaying it to user
         */

    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

        /**
         * Selects random phrase from phrases property
         *  @return {Object} Phrase object chosen should be used
         */

    getRandomPhrase(){
        return this.phrases[ Math.floor( Math.random() * this.phrases.length ) ];
    }

        /**
        * Checks for winning move
        * @return {boolean} True if game has been won, false if game wasn't
        won
        */

    checkForWin() {
        const letters = document.getElementsByClassName('letter');
        const show = document.getElementsByClassName('show');

        if(letters.length === show.length){
            return true;
        } else {
            return false;
        }
    };

        /**
         * Increases the value of the missed property
         * Removes a life from the scoreboard
         * Checks if players has remaining lives and ends game if player is out
         */

    removeLife() {
        const tries = document.querySelectorAll('.tries img');

        for (let i = 0; i < tries.length; i++){
            tries[this.missed].setAttribute('src', 'images/lostHeart.png');
        }

        this.missed++;

        if (this.missed === 5) {
            this.gameOver();
            this.restartGame();
        }
    };

        /**
         * Displays game over message
         * @param {boolean} gameWon - Whether or not the user won the game
         */

    gameOver() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = '';

        const message = document.getElementById('game-over-message');
        const button = document.getElementById('btn__reset');
        button.innerText = 'Play Again';

        if ( this.missed < 5 ){
            message.innerText = 'You Win!';
            overlay.className = 'win';
            document.querySelector('.win').style.backgroundColor = '#ff534a';
        } else {
            message.innerText = 'Better luck next time!';
            overlay.className = 'lose';
            document.querySelector('.lose').style.backgroundColor = '#989e8b';

        }

    };

        /**
        * Handles onscreen keyboard button clicks
        * @param (HTMLButtonElement) button - The clicked button element
        */

    handleInteraction(button) {
        button.disabled = true;
        
        if ( this.activePhrase.checkLetter(button.innerHTML) ) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.innerHTML);

            if ( this.checkForWin() ) {
                this.gameOver();
                this.restartGame();
            } 

        } else {
            button.classList.add('wrong');
            this.removeLife();
        };
        
    }
        /**
         * Restarts the game after win/loss
         */

    restartGame() {
        this.missed = 0;

        const phrase = document.querySelector('#phrase ul');
        const items = document.querySelectorAll('#phrase li')
    
        const keyboard = document.querySelectorAll('#qwerty button');
    
        const tries = document.querySelectorAll('.tries img');
    
        for (let i = 0; i < items.length; i++) {
            phrase.removeChild(items[i]);
        }
    
        for (let i = 0; i < keyboard.length; i++) {
             keyboard[i].disabled = false;
            keyboard[i].className = 'key';
        }
    
        for (let i = 0; i < tries.length; i++){
            tries[i].setAttribute('src', 'images/liveHeart.png');
        }
    }

}