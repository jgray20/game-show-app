/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


document.getElementById('btn__reset').addEventListener('click', (e) => {
    const game = new Game();
    game.startGame();
});

