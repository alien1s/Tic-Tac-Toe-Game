const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = true;

const players = [
    {
        name:'',
        symbol:'X',
    },
    {
        name:'',
        symbol:'O',
    },
];


const overlayConfigElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const configErrorsElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
const winnerNameElement = document.getElementById('winner-name');

const cancelConfigOverlayBtn = document.getElementById('cancel-config-btn');
const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const startNewGameBtn = document.getElementById('start-game-btn');
// const gameFieldElement = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

editPlayer1Btn.addEventListener('click', openConfigOverlay);
editPlayer2Btn.addEventListener('click', openConfigOverlay);

cancelConfigOverlayBtn.addEventListener('click', cancelConfigOverlay);
backdropElement.addEventListener('click', cancelConfigOverlay);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);

// for (selectedGameField of gameFieldElement) {
//     selectedGameField.addEventListener('click', selectGameField);
// };
gameBoardElement.addEventListener('click', selectGameField);