function hideElementById(elementId){
    const getId = document.getElementById(elementId);
    getId.classList.add('hidden');
}

function showElementById(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.remove('hidden');
}

function setBackgroundColor(elementId) {
    const getAlphabetId = document.getElementById(elementId);
    getAlphabetId.classList.add('bg-orange-400');
}

function getRandomAlphabet() {
    const alphabetsString = 'abcdefghihklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}