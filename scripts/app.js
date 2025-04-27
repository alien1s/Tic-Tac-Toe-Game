const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

// ----------

let editPlayer = 0;
let activePlayer = 0;
let boxStyle = 'disabled-x';
let currentRound = 1;
let gamIsOver = false;

// ----------

const players = [
    {
        name:'',
        sympol:'X'
    },
    {
        name:'',
        sympol:'O'
    },
];

// ----------

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

const formChooseNameElement = document.querySelector('form');
const errorsConfigOutputElement = document.getElementById('config-error');

const enteredPlayernameInputElement = document.getElementById('user-enterd-name');
const cancelConfigButtonElement = document.getElementById('cancel-config-button');
const confirmConButtonElement = document.getElementById('confirm-config-button');

// ----------

const player1CardElement = document.getElementById('player-1-card');
const player2CardElement = document.getElementById('player-2-card');
const player1IconElement = document.getElementById('player-1-icon');
const player2IconElement = document.getElementById('player-2-icon');
const player1NamePlaceElement = document.getElementById('player-1-name-place');
const player2NamePlaceElement = document.getElementById('player-2-name-place');
const player1SymbolElement = document.getElementById('player-symbol-x');
const player2SymbolElement = document.getElementById('player-symbol-o');

const editPlayer1ButtonElement = document.getElementById('player-edit-1-button');
const editPlayer2ButtonElement = document.getElementById('player-edit-2-button');

// ----------

const gameGenerationErrorElement = document.getElementById('game-generation-error');
const gameGenerationErrorBtnElement = document.getElementById('game-generation-error-btn');
const gamePlaygroundSectionElement = document.getElementById('game-playground-section');
const generateNewGameButtonElement = document.getElementById('game-generate-button');

// ----------

const gameOverElement = document.getElementById('game-over');
const gameOverFirstElement = document.querySelector('#game-over h2');

// ----------

// const gameBoardElement = document.getElementById('game-board');
const gameFiledElement = document.querySelectorAll('#game-board li');
const activePlayerNameInsights = document.getElementById('active-player-name');
const activeGameInsightDivElement = document.getElementById('game-insights');

// ----------

editPlayer1ButtonElement.addEventListener('click', openPlayerConfig);
editPlayer2ButtonElement.addEventListener('click', openPlayerConfig);

cancelConfigButtonElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formChooseNameElement.addEventListener('submit',savePlayerConfig);

generateNewGameButtonElement.addEventListener('click', generateNewGame);

// gameBoardElement.addEventListener('click', selectGameFieldElement);
for (const selectedFiledElement of gameFiledElement) {
    selectedFiledElement.addEventListener('click', selectGameFieldElement);
};

