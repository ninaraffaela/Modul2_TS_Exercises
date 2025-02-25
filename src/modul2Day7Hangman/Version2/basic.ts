
const words: string[] = [
    'APPLE', 'BANANA', 'CHAIR', 'TABLE',
    // 'PHONE', 'BOOK', 'CAR', 'HOUSE', 'DOG',
    // 'CAT', 'TREE', 'FLOWER', 'RIVER', 'MOUNTAIN',
    // 'SUN', 'MOON', 'STAR', 'CLOUD', 'RAIN',
    // 'SHOE', 'SHIRT', 'PANTS', 'DOOR', 'WINDOW',
    // 'BIRD', 'FISH', 'ROAD', 'BRIDGE', 'SCHOOL'
];
let currentWord: string;
let guessedLetters: Set<string> = new Set();
const maxGuesses: number = 6;
let wrongGuesses: number = 0;
let wordDisplay: string[];

const wordDisplayElement = document.getElementById('word-display') ;
const wrongGuessesElement = document.getElementById('wrong-guesses') ;
const remainingGuessesElement = document.getElementById('remaining-guesses') ;
const winOrRestartElement = document.getElementById('WinOrRestart') ;
const letterButtons = document.querySelectorAll('.letter-btn');
const restartButton = document.getElementById('restart');

function getRandomWord(): string {
    return words[Math.floor(Math.random() * words.length)];
}


function updateDisplay(){
    wordDisplayElement.textContent = wordDisplay.join(' ');
    wrongGuessesElement.textContent = `Wrong guesses: ${Array.from(guessedLetters)
        .filter(letter => !currentWord.includes(letter))
        .join(', ')}`;

    const remaining = maxGuesses - wrongGuesses;
    remainingGuessesElement.textContent = `Remaining guesses: ${'❤️'.repeat(remaining)}`; //>herzen
}

function handleGuess(letter: string){
    if (guessedLetters.has(letter) || wrongGuesses >= maxGuesses) return;

    guessedLetters.add(letter);
    
    if (currentWord.includes(letter)) {
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter) {
                wordDisplay[i] = letter;
            }
        }
    } else {
        wrongGuesses++;
    }

    updateDisplay();
    checkGameState();
}


function checkGameState(){
    if (wordDisplay.join('') === currentWord) {
        winOrRestartElement.textContent = 'You Win! Click Restart to play again.';
        winOrRestartElement.classList.add('animated-text');
        disableButtons();
    } else if (wrongGuesses >= maxGuesses) {
        winOrRestartElement.textContent = `Game Over! The word was ${currentWord}. Click Restart to try again.`;
        winOrRestartElement.classList.add('animated-text');
        disableButtons();
    }
}


function disableButtons(){
    letterButtons.forEach(button => {
        button.disabled = true;
    });
}

function resetGame(){
    currentWord = getRandomWord();
    guessedLetters.clear();
    wrongGuesses = 0;
    wordDisplay = Array(currentWord.length).fill('_');
    winOrRestartElement.textContent = '';
    winOrRestartElement.classList.remove('animated-text');
    
    letterButtons.forEach(button => {
        button.disabled = false;
    });
    
    updateDisplay();
}

function addEventListeners(){
    letterButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleGuess(button.textContent!.trim());
        });
    });

    restartButton.addEventListener('click', () => {
        resetGame();
    });
}

function initializeGame(){
    currentWord = getRandomWord();
    wordDisplay = Array(currentWord.length).fill('_');
    updateDisplay();
    addEventListeners();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});