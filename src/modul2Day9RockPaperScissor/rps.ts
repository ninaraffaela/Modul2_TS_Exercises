// ! Link HTML

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




// # wo packe ich event.preventDefault hin? in jede funktion?


// ! chooseRounds

form?.addEventListener("submit", getUserRounds);

// eventlistener on form. submit => getValue of userRounds. return?
// roundform no-show / hidden
// # not sure how


// ! START GAME
// createRoundCount()
// createWinCount()
// hideChooseRounds


// ! create RoundCount

function getUserRounds(event:Event) {
    event.preventDefault()

    if(userRounds){
    const roundsToPlay = Number(userRounds.value);
    console.log(userRounds); //function
    console.log(roundsToPlay); // userInput Number as Number
    console.log(getUserRounds);
    
    return roundsToPlay;
    }
}

// roundCount =  playedRounds / roundsToPlay
// roundsToPlay = userRounds 
// playedRounds = i  (i = 0; i < roundsToPlay; i++)
// innerHTML


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


// ! randomComFighter
// comFighter . random number between 1 and 3


// ! displayFighter
//  userFighter innerHTML
//  comFighter innerHTML


// ! restartGame
// 











