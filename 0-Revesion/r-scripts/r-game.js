function resetGameStatus () {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = '<h2>You won, <span id="winner-name">PLAYER NAME</span>!</h2>';
    gameOverElement.style.display = 'none';
    // if (gameIsOver) {
    //     gameBoardElement.addEventListener('click', selectGameField);
    // }
    

    let gameBoardIndex = 0;
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            gameData[i][j] = 0;

            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent ='';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++
        }
    }
}

function startNewGame () {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both players!');
        return;
    };

    resetGameStatus();

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
};


function switchPlayer () {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
}


function selectGameField (event) {
    if (event.target.tagName !== 'LI' || gameIsOver) {
        return;
    };

    
    const selectedGameField = event.target;
    const selectedColumn = selectedGameField.dataset.col - 1;
    const selectedRow = selectedGameField.dataset.row - 1;
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please select an empty field')
        return;
    }
    selectedGameField.textContent = players[activePlayer].symbol;
    selectedGameField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();
    
    currentRound++;

    if ( winnerId !== 0) {
        endGame(winnerId);
    }

    
    switchPlayer();

}


function checkForGameOver () {
    for (let i=0; i < 3; i++ ) {
        if (
            gameData[i][0] > 0 && 
            gameData[i][0] ===  gameData[i][1] && 
            gameData[i][1] ===  gameData[i][2]
        ) {
            return gameData[i][0];
        }

        if (
            gameData[0][i] > 0 && 
            gameData[0][i] ===  gameData[1][i] && 
            gameData[1][i] ===  gameData[2][i]
        ) {
            return gameData[0][i];
        }
        
    }

    if (gameData[0][0] > 0 && gameData[0][0] ===  gameData[1][1] && gameData[1][1] ===  gameData[2][2]) {
        return gameData[0][0];
    }

    if (gameData[0][2] > 0 && gameData[0][2] ===  gameData[1][1] && gameData[1][1] ===  gameData[2][0]) {
        return gameData[0][2];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;
}


function endGame (winnerId) {
    
    gameIsOver = true;
    gameOverElement.style.display = 'block';
    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        const winnerNameElement = document.getElementById('winner-name');
        winnerNameElement.textContent = winnerName;
        // if (gameIsOver) {
        //     gameBoardElement.removeEventListener('click', selectGameField);
        // }
        
    } else {
        gameOverElement.firstElementChild.textContent = 'It\'s a Draw';
    }
}