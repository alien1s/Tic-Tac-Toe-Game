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
            };
        gameGenerationErrorBtnElement.addEventListener('click',closePlayerError);
        return;
    }

    gamePlaygroundSectionElement.style.display ='block';
    activePlayerNameInsights.textContent = players[activePlayer].name;
    activePlayerNameInsights.classList.add('disabled-x');

};


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

}





function selectGameFieldElement (event) {
    // if (event.target.tagName !== 'LI') {
    //     return;
    // };
    const selectedField = event.target;
    
    if (selectedField.textContent == 'X' ||selectedField.textContent == 'O') {
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

    console.log(gameData);

    switchPlayer();
    event.target.classList.add(boxStyle);   
    
};