// const words:string[] = ["Abendbrot", "Brueckentag", "Erklaerungsnot", "Fingerspitzengefuehl", "Fremdschaemen", "Geborgenheit", "Geschmacksverirrung", "Schweinehund", "Kopfkino", "Kummerspeck", "Schnapsidee", "Torschlusspanik", "verabredet", "verschlimmbessern", "Vorfreude", "Weltschmerz", "Zeitgeist", "Zugzwang"];

const words:string[] = ["test", "Maus", "Apple", "Tisch"]



const maxAttempts: number = 6;
let attemptsLeft: number = maxAttempts;
let selectedWord: string = words[Math.floor(Math.random() * words.length)].toUpperCase();
let guessedLetters: Set<string> = new Set();
let timer: number = 0;
let timerInterval: number;

const wordDisplay= document.getElementById("word-display") as HTMLParagraphElement;
const attemptsLeftDisplay = document.getElementById("attempts-left") as HTMLParagraphElement;
const keyboard = document.getElementById("keyboard") as HTMLDivElement;
const resetButton = document.getElementById("reset-button") as HTMLButtonElement; 
const message = document.getElementById("message") as HTMLParagraphElement;
const timeDisplay = document.getElementById("time") as HTMLSpanElement;

const germanLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ";


//# Tastaturtasten erstellen
function createKeyboard(): void {
    for (const letter of germanLetters) {
        const button = document.createElement("button");
        //! MISSING give the created button a class. then style the class in handleGuess()
        // ! MISSING remove the class for colors
        button.textContent = letter;
        button.addEventListener("click", () => handleGuess(letter));
        keyboard.appendChild(button);
    }
}
// 


//# // Das Wort auf dem Bildschirm anzeigen (Beispiel: _ _ _ _ _)

function displayWord():void {
    let display = "";
    for(const letter of selectedWord){
        if(guessedLetters.has(letter))
        {
            display += letter;
        }else{
            display +="_";
        }
        display += " ";
    }

    wordDisplay.textContent = display.trim();
}

//# Verbleibende Rateversuche aktualisieren
// - opt 1 remaining guesses as number next to the heart
function updateAttempts():void {
    attemptsLeftDisplay.textContent = attemptsLeft.toString();
}

// -opt 2 remaining guesses as hearts
// * wenn diese option verwendet wird-  - dann in dieser funktion die wordings der variablen anpassen  siehe oben
// function updateDisplay(){
//     wordDisplayElement.textContent = wordDisplay.join(' ');
//     wrongGuessesElement.textContent = Wrong guesses: ${Array.from(guessedLetters)
//         .filter(letter => !currentWord.includes(letter))
//         .join(', ')};

//     const remaining = maxGuesses - wrongGuesses;
//     remainingGuessesElement.textContent = Remaining guesses: ${'❤️'.repeat(remaining)}; //>herzen
// }

//# Hat der Spieler gewonnen?
function checkWin(): boolean {
    return selectedWord.split("").every(letter=>guessedLetters.has(letter));
}

//#Hat der Spieler verloren?
function checkLose(): boolean {
    return attemptsLeft <=0;
}

// # User startet neues Spiel
resetButton. addEventListener("click", resetGame);


//# Neues Spiel starten
// function resetGame(): void {
//     selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
//     guessedLetters.clear();
//     attemptsLeft = maxAttempts;
//     displayWord();
//     updateAttempts();
//     message.textContent = "";
//     // Schaltflächen wieder aktivieren
//     keyboard.classList.remove("disabled");
//     keyboard.querySelectorAll("button").forEach(button => {
//         button.classList.remove("disabled");
//     });

//     clearInterval(timerInterval);
//     timer = 0;
//     timeDisplay.textContent = "0";
//     startTimer();
// }

function resetGame(): void {
    selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    guessedLetters.clear();
    attemptsLeft = maxAttempts;
    displayWord();
    updateAttempts();
    message.textContent = "";
    // Schaltflächen wieder aktivieren
    keyboard.querySelectorAll("button").forEach(button => {
        button.classList.remove("disabled","wrong","correct");
    });

    clearInterval(timerInterval);
    timer = 0;
    timeDisplay.textContent = "0";
    startTimer();
}




function startTimer(): void {
    timerInterval = setInterval(() => {
        timer++;
        timeDisplay.textContent = timer.toString();
    }, 1000);
}

//# // Buchstaben-Rateprozess
function handleGuess(letter: string): void {
    if (guessedLetters.has(letter)) {
        message.textContent = "Du hast diesen Buchstaben bereits geraten.";
        return;
    }

    guessedLetters.add(letter);
    const button = Array.from(keyboard.querySelectorAll("button")).find(btn => btn.textContent === letter);
    if (button) {
        button.classList.add("disabled");
    }

    if (!selectedWord.includes(letter) && button) {
        attemptsLeft--;
        // !  style the button red'button.style'
        
        button.style.color = " rgba(247, 106, 106, 0.475)";
        message.textContent = `Der Buchstabe ${letter} ist nicht im Wort.`;
    } else {
        if (button){
        // !  style the button green 
        button.style.color = " rgba(81, 194, 28, 0.47)";
        message.textContent = `Gut gemacht! Der Buchstabe ${letter} ist im Wort.`;
    }
    }

    displayWord();
    updateAttempts();

    if (checkWin()) {
        // # stop the timer
        message.textContent = "👾🍀🥳Herzlichen Glückwunsch, du hast gewonnen! Versuch´s gerne nochmal 👾";
    
    } else if (checkLose()) {
        // # stop the timer
        message.textContent = `👾GAME OVER.👾 Das Wort war ${selectedWord}. Versuch´s gerne nochmal 👾`;
        // resetGame();
        if (button){
        keyboard.classList.add("disabled");
        }
    }
}


resetButton.addEventListener("click", resetGame);



//# starte das Spiel
//* Ich rufe die Funktionen auf, die ich geschrieben habe
createKeyboard();
displayWord();
updateAttempts();