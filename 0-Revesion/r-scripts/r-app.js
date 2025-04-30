let editedPlayer = 0;

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

const cancelConfigOverlayBtn = document.getElementById('cancel-config-btn');

const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');

const startNewGameBtn = document.getElementById('');


editPlayer1Btn.addEventListener('click', openConfigOverlay);
editPlayer2Btn.addEventListener('click', openConfigOverlay);

cancelConfigOverlayBtn.addEventListener('click', cancelConfigOverlay);
backdropElement.addEventListener('click', cancelConfigOverlay);

formElement.addEventListener('submit', savePlayerConfig);