// function play(){
//     const homeScreen = addClassById('home-screen');
//     // console.log(homeScreen.classList);
//     homeScreen.classList.add('hidden');


//     const playGround = document.getElementById('play-ground');
//     // console.log(playGround.classList)
//     playGround.classList.remove('hidden');
// }

function continueGame() {
    const game = getRandomAlphabet();
    const showAlphabet = document.getElementById('show-alphabet');
    showAlphabet.innerText = game;
    setBackgroundColor(game);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground')
    continueGame();
}