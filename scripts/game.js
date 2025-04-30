//--------------------

function restGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gamIsOver = false;

    gameOverFirstElement.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';
    activeGameInsightDivElement.style.display = 'block';

    let gameFieldIndex = 0;
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {// this two for loops loops in matrix items
            gameData[i][j] = 0;
            gameFiledElement[gameFieldIndex].textContent = '';
            gameFiledElement[gameFieldIndex].classList.remove('disabled-x');
            gameFiledElement[gameFieldIndex].classList.remove('disabled-o');
            gameFieldIndex++;
        };
    };
};

//--------------------

function generateNewGame () {
    // if (players[0].name === '' || players[1].name === '') {
    //     alert('Please set custom players names for both players to start the game!');
    // } else {
    //     gamePlaygroundSectionElement.style.display ='block';
    // };

    if (players[0,1].name === '') {
        backdropElement.style.display = 'block';
        backdropElement.removeEventListener('click',closePlayerConfig);
        gameGenerationErrorElement.style.display = 'block';
            function closePlayerError() {
                backdropElement.style.display = 'none';
                gameGenerationErrorElement.style.display = 'none';
                backdropElement.addEventListener('click',closePlayerConfig);
            };
        gameGenerationErrorBtnElement.addEventListener('click',closePlayerError);
        return;
    };

    restGameStatus();

    gamePlaygroundSectionElement.style.display ='block';
    activePlayerNameInsights.textContent = players[activePlayer].name;
    activePlayerNameInsights.classList.add('disabled-x');
    if (winnerId === 0) {
        activePlayerNameInsights.classList.add('disabled-o');
    } else {
        activePlayerNameInsights.classList.add('disabled-x');
    };

};

//--------------------

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayerNameInsights.classList.remove('disabled-x');
        activePlayerNameInsights.classList.add('disabled-o');
        boxStyle ='disabled-x';
        activePlayer = 1;

    } else {      
        activePlayerNameInsights.classList.remove('disabled-o');      
        activePlayerNameInsights.classList.add('disabled-x');
        boxStyle ='disabled-o';
        activePlayer = 0;

    };

    activePlayerNameInsights.textContent = players[activePlayer].name;

};

function selectGameFieldElement (event) {
    // if (event.target.tagName !== 'LI') {
    //     return;
    // };
    if (gamIsOver) {
        return;
    };

    const selectedField = event.target;
    
    if (selectedField.textContent == 'X' || selectedField.textContent == 'O') {
        alert('Please select an empty field!')
        return;
    }; 

    // if (gameData[selectedRowField][selectedColumnField] > 0) {
    //     alert('Please select an empty field!');
    //     return;
    // }; this another way and put the selecte column and row var before this if statment

    selectedField.textContent = players[activePlayer].sympol;

    const selectedColumnField = selectedField.dataset.x - 1;
    const selectedRowField = selectedField.dataset.y - 1;
    gameData[selectedRowField][selectedColumnField] = activePlayer + 1;

    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
        endGame(winnerId);
    };

    currentRound++;

    switchPlayer();

    event.target.classList.add(boxStyle);   
    
};

//--------------------

function checkForGameOver () {
    // if (gameData[selectedRowField][selectedRowField] !== [0,0,0][0,0,0]) {
    //     gameFiledElement.removeEventListener('click', selectGameFieldElement);
    // } else {
    //     return;
    // }

    for (let i=0; i<3;i++) {
        // Checking the rows for equality
        if (gameData[i][0]>0 && gameData[i][0] === gameData[i][1] && gameData[i][0] === gameData[i][2]) {
            return gameData[i][0];
        };

        // Checking the columns for equality
        if (gameData[0][i]>0 && gameData[0][i] === gameData[1][i] && gameData[0][i] === gameData[2][i]) {
            return gameData[0][i];
        };  

    };

 // Diagonal: Top left to bottom right
    if (gameData[0][0]>0 && gameData[0][0] === gameData[1][1] && gameData[0][0] === gameData[2][2]) {
        return gameData[0][0];
    };
    
 // Diagonal: Bottom left to top right
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
      ) {
        return gameData[2][0];
    };

 // Checking for Draw
    if (currentRound === 9) {
        return -1;
    };

 // Game not finished
    return 0;

};

function endGame (winnerIndex) {
    gamIsOver = true;
    gameOverElement.style.display = 'block';
    activeGameInsightDivElement.style.display = 'none';

    if (winnerIndex > 0) {
        const winnerNameElement = document.getElementById('winner-name');
        const winnerName = players[winnerIndex - 1].name;
        winnerNameElement.textContent = winnerName;
    } else {
        gameOverFirstElement.textContent = 'It\'s a DRAW (-_-) !';
        gameOverElement.firstElementChild.style.display = 'none';
        
    };
    
};

//--------------------