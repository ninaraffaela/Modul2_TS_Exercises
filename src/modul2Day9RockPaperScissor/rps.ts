// ! Link with HTML

// - chooseRound, countRound
const form = document.querySelector("#round-form");
const userRounds = document.querySelector("#choose-rounds") as HTMLSelectElement;

// - countRound
const roundCounter = document.querySelector(".round-count");

// - countWins
const winCounter = document.querySelector(".win-count");

// - Arena, chooseFighter
const arena = document.querySelector(".arena");
const userFighter = document.querySelector(".user-fighter");
const comFighter = document.querySelector(".com-fighter");

// - Restart
const restart = document.querySelector(".restart");



enum Fighter {
    Rock,
    Paper,
    Scissors
};

console.log(Fighter);
console.log(Fighter[0]); // Rock
console.log(Fighter[1]); // Paper
console.log(Fighter[2]); // Scissors

// ! pick global variables
// let currentRound = 0
// let userPoints = 0
// let comPoints = 0
// 

// ! START GAME
// createRoundCount()
// createWinCount()
// hideChooseRounds

// # wo packe ich event.preventDefault hin? in jede funktion?




// ! user Chooses Rounds
// user submits a selectform with a chosen option of rounds

form?.addEventListener("submit", getUserRounds);
// # wie könnte ich hier mehrere funktionen rein?



// ! get User Rounds - WORKS
function getUserRounds(event:Event) {
    event.preventDefault()

    if(userRounds){
    const roundsToPlay = Number(userRounds.value);
    console.log(userRounds); //HTML code
    console.log(roundsToPlay); // userInput Number as Number
    console.log(getUserRounds);  // function as code
    return roundsToPlay;
    }
}


// ! create RoundCount

// roundform no-show / hidden
// # not sure how - look at hangman classList
// roundcount show

// roundcount.innerhtml  roundsPlayed / roundsToPlay
// 
// roundsToPlay = userRounds 
// roundsPlayed  = i  for (let i = 0; i < roundsToPlay; i++)
// # not sure how - compare with correct syntax of foor loops. which brackets where.


// ! create WinCount
// winCounter.innerHTML


// ! getResult

// i++ on roundCount


// * SWITCH
    //* TIE
    // user r - com r 
    // user p - com p
    // user s - com s 

     // no change on winCountUser
    //  no change on winCountCom


    //* WIN
    // user r - com s
    // user p - com r -> Win
    // user s - com p -> Win

    // +1 on winCountUser
    // no change on winCountCom


    //* LOSE
    // user r - com p 
    // user p - com s 
    // user s - com r 

    // no change on winCountUser
    // +1 on winCountCom



// *Switch 
// user r - com r -> Tie
// user r - com p -> Lose
// user r - com s -> Win

// user p - com r -> Win
// user p - com p -> Tie
// user p - com s -> Lose

// user s - com r -> Lose
// user s - com p -> Win
// user s - com s -> Tie




// ! chooseUserFighter
// userFighter . Value of click 1 2 or 3
// or enum 1 2 3


// ! randomComFighter
// comFighter . random number between 1 and 3
// enum fighter


// ! displayFighter
//  userFighter innerHTML
//  vs. 
//  comFighter innerHTML


// ! restartGame
// choose rounds un hidden
// roundCount hidden
// winCount hidden
// reset arena clear players
//  









// ! inspiration
// https://alpayc.github.io/Project_Rock_Paper_Scissors/

