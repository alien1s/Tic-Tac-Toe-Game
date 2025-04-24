const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop')

const editPlayer1ButtonElement = document.getElementById('player-edit-1-button');
const editPlayer2ButtonElement = document.getElementById('player-edit-2-button');


const cancelConfigButtonElement = document.getElementById('cancel-config-button');
const confirmConButtonElement = document.getElementById('confirm-config-button');


editPlayer1ButtonElement.addEventListener('click', openPlayerConfig);
editPlayer2ButtonElement.addEventListener('click', openPlayerConfig);

cancelConfigButtonElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);