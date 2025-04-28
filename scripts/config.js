function pickingRandomSide () {
    return(Math.floor(Math.random()*2) + 1);
};

function pickFirstPlayingSide () {
    const firstPlayerSide = pickingRandomSide();

    if (firstPlayerSide === 1) {
        playerSideXElement.textContent = 'Player 1';
        playerSideOElement.textContent = 'Player 2';
    } else {
        playerSideOElement.textContent = 'Player 1';
        playerSideXElement.textContent = 'Player 2';
    };

};

function openPlayerConfig (event) {
    
    if (!playerSideXElement.textContent) { // !playerSideXElement = (playerSideXElement === '')  & '' is a Falsy value
        backdropElement.style.display = 'block';
        backdropElement.removeEventListener('click',closePlayerConfig);
        gameGenerationErrorElement.style.display = 'block';
        gameGenerationErrorParagraphElement.textContent = 'Please pick a side!';
        gameGenerationErrorElement.classList.add('random');
            function closePlayerError() {
                backdropElement.style.display = 'none';
                gameGenerationErrorElement.style.display = 'none';
                gameGenerationErrorParagraphElement.textContent = 'Please set custom players names for both players to start the game!';
                backdropElement.addEventListener('click',closePlayerConfig);
            };
        gameGenerationErrorBtnElement.addEventListener('click',closePlayerError);

        return;
    };

    editPlayer = +event.target.dataset.playerid; // (+'1' ==> 1 ) / also if the data property notation stored in html with '-' like player-id we can use .dataset['player-id'] 
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
};

function closePlayerConfig () {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formChooseNameElement.firstElementChild.classList.remove('error')
    playerConfigOverlayElement.classList.remove('errors')
    backdropElement.classList.remove('errors');
    errorsConfigOutputElement.textContent = '';
    enteredPlayernameInputElement.value = '';
    gameGenerationErrorElement.style.display = 'none';
};

function savePlayerConfig (event) {
    event.preventDefault();
    const formData = new FormData(event.target); // FormData is a blueprint method we can initiate it by "new" keyword
    const enteredPlayername = formData.get('playername').trim();// '    Saif Eldin    ' ==>  'Saif Eldin'  & '       ' ==> ''

    if (!enteredPlayername) { // !enteredPlayername = (enteredPlayername === '')  & '' is a Falsy value
        event.target.firstElementChild.classList.add('error');
        playerConfigOverlayElement.classList.add('errors')
        backdropElement.classList.add('errors');

        errorsConfigOutputElement.textContent = 'Please enter a valid name!';
        errorsConfigOutputElement.style.color = 'var(--errors-color-900)';

        return;
    };

    const updatedPlayerNamePlaceElement = document.getElementById('player-' + editPlayer + '-name-place');
    updatedPlayerNamePlaceElement.textContent = enteredPlayername;

    if (editPlayer === 1) {
        players[0].name = enteredPlayername;
        player1CardElement.style.border = '2px solid var(--player-color-1)';
        player1IconElement.style.fill = 'var(--player-color-1)';
        player1NamePlaceElement.style.color = 'var(--player-color-1)';
        player1SymbolElement.style.color = 'var(--player-color-1)';
    
    } else {
        players[1].name = enteredPlayername;
        player2CardElement.style.border = '2px solid var(--player-color-2)';
        player2IconElement.style.fill = 'var(--player-color-2)';
        player2NamePlaceElement.style.color = 'var(--player-color-2)';
        player2SymbolElement.style.color = 'var(--player-color-2)';
    };

    // players[editPlayer-1].name = enteredPlayername;
    closePlayerConfig();
};