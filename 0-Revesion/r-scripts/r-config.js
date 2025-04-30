function openConfigOverlay (event) {
    editedPlayer = event.target.dataset.playerid;
    overlayConfigElement.style.display = 'block';
    backdropElement.style.display = 'block';

}

function cancelConfigOverlay () {
    overlayConfigElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    configErrorsElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig (event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const enteredName = formData.get('playername').trim();

    if (!enteredName) {
        event.target.firstElementChild.classList.add('error');
        configErrorsElement.textContent = 'Please entir a valid name';
        
        return;
    }

    const playerNameElement = document.getElementById('player-' + editedPlayer + '-data');
    playerNameElement.children[1].textContent = enteredName;

    players[editedPlayer - 1].name = enteredName;

    cancelConfigOverlay();

}