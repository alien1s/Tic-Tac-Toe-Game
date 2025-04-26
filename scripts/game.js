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

    


    
    
};