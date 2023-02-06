/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


document.getElementById('btn__reset').addEventListener('click', (e) => {
    const game = new Game();
    game.startGame();

    document.getElementById('qwerty').addEventListener('click', (e) => {
        if ( e.target.tagName === 'BUTTON' ) {
             game.handleInteraction(e.target);
        };
    });
});

