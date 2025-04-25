function openPlayerConfig () {
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
    }

};