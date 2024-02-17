function handleKeyBoardButtonPress(event) {  //!>>>> Confusion <<<<
    const playerPressed = event.key;
    // console.log('Player Pressed',playerPressed);

    const showAlphabet = document.getElementById('show-alphabet');
    const expectedAlphabet = showAlphabet.innerText.toLowerCase();
    // console.log('Expected Alphabeat', showAlphabet.innerText) 

    if (playerPressed === expectedAlphabet) {
        const currentScore = getElementByIdTextConvertToNumber('current-score');
        const newScore = currentScore + 1;
        setElementByIdText('current-score', newScore);
        // *-------------------------------------------------------------
        // const currentScore = document.getElementById('current-score');
        // const getCurrentScoreInnerText = currentScore.innerText;
        // const convertToNumber = parseInt(getCurrentScoreInnerText);
        // *-------------------------------------------------------------

        // const newScore = convertToNumber + 1; 
        // *-------------------------------------------------------------
        // currentScore.innerText = newScore;
        // *-------------------------------------------------------------

        removeBackgroundColor(expectedAlphabet);
        continueGame();
    } else {
        const currentLifeLine = getElementByIdTextConvertToNumber('current-life');
        const newLife = currentLifeLine - 1;
        setElementByIdText('current-life', newLife);
        if (newLife === 0) {
            gameOver()
        }
        // *-------------------------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeElementText = currentLifeElement.innerText;
        // const convertToNumber = parseInt(currentLifeElementText);
        // *-------------------------------------------------------------------

        // const newLife = convertToNumber - 1;
        // *-------------------------------------------------------------------
        // currentLifeElement.innerText = newLife;
        // *-------------------------------------------------------------------
    }
}

document.addEventListener('keyup', handleKeyBoardButtonPress) //!>>>***<<<

function continueGame() {
    const game = getRandomAlphabet();
    const showAlphabet = document.getElementById('show-alphabet');
    showAlphabet.innerText = game;
    setBackgroundColor(game);
}

function play() {
    hideElementById('home-screen');
    hideElementById('Score-board');
    showElementById('play-ground');

    setElementByIdText('current-score', 0);
    setElementByIdText('current-life', 5);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('Score-board');
}