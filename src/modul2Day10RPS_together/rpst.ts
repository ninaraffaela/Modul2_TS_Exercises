// ! Rock Paper Scissor gemeinsam runtercoden

//* HTML mit TS verheiraten
// rounds
const rundenAnzeige = document.querySelector(".runden-anzeige");
const gesamteRunden = document.querySelector(".gesamte-runden");
const gespielteRunden = document.querySelector(".gespielte-runden");
const rundenAnzahlAuswahl = document.querySelector(".runden-anzahl");

// spielstände
const spielstandSpieler = document.querySelector(".spielstand-spieler");
const spielstandComputer = document.querySelector(".spielstand-computer");

// anzeige für gewonnen, verloren, usw
const actionOutput = document.querySelector(".action-output");

// Buttons
const btnArea = document.querySelector(".choices");
const schereBtn = document.querySelector<HTMLButtonElement>(".schere");
const steinBtn = document.querySelector<HTMLButtonElement>(".stein");
const papierBtn = document.querySelector<HTMLButtonElement>(".papier");

// reset
const resetBtn = document.querySelector<HTMLButtonElement>(".reset");



//! Variablen global festlegen (Runden , Spielstande)

// * currentRound / aktuelleRunde
let aktuelleRunde = 0;

// * spielstände Punkte
let spielerPunkte = 0;

// * computerPunkte
let computerPunkte = 0;

// * computerChoice
let computerChoice = '';


// ! FN schreiben wo eine zufällige computerChoice generiert wird
function randomPCChoice() {
    // * random pick between 1,2,3
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        computerChoice = "Schere";
    } else if (randomNum === 2) {
        computerChoice = "Stein";
    } else {
        computerChoice = "Papier";
    }
}


//! Eventlistener auf die Buttons legen

schereBtn?.addEventListener("click", () => playGame("Schere"));
steinBtn?.addEventListener("click", () => playGame("Stein"));
papierBtn?.addEventListener("click", () => playGame("Papier"));


//! Hauptfunktion playGame
function playGame(userChoice: string) {
    randomPCChoice();
    //* get the one radiobutton that is checked
    const roundsInput = document.querySelector<HTMLInputElement>("input[name='num-of-rounds']:checked");

    //*  get the value of the userchoice
    const gesamteRundenZahl = Number(roundsInput?.value);
    // console.log(gesamteRundenZahl);
    
    // * check if all the elements are there
    if(gesamteRunden && 
        rundenAnzahlAuswahl && 
        rundenAnzeige && 
        gesamteRunden && 
        gespielteRunden && 
        spielstandSpieler && 
        spielstandComputer && 
        actionOutput && 
        btnArea) {
            // console.log("irgendwas");
            
            //* runden ins HTML ausgeben (auswahl ausblenden. anzeige einblenden.)
            rundenAnzahlAuswahl.classList.add("display-none");
            rundenAnzeige.classList.add("display-block");

            //* get the gesamt RundenAnzahl as string
            gesamteRunden.innerHTML = gesamteRundenZahl.toString();

            //* runden hochzählen
            aktuelleRunde++;
            gespielteRunden.innerHTML = aktuelleRunde.toString();

            // * who won the round
            if (userChoice === "Schere" && computerChoice === "Papier" || 
                userChoice === "Papier" && computerChoice === "Stein" ||
                userChoice === "Stein" && computerChoice === "Schere"
            ) {
                spielerPunkte++;
                actionOutput.innerHTML = "Du hast gewonnen"
            } else if (userChoice === computerChoice) {
                actionOutput.innerHTML = "Unentschieden. Beide haben das gleiche gewählt 👾"
            } else {
                computerPunkte++;
                actionOutput.innerHTML = "Du hast verloren"
            }

            // * Spielstand aktualisieren
            spielstandSpieler.innerHTML = spielerPunkte.toString();
            spielstandComputer.innerHTML = computerPunkte.toString();

            //* spiel beenden wenn gesamtRundenAnzahl erreicht wurde
            if (aktuelleRunde === gesamteRundenZahl) {
                if (spielerPunkte === computerPunkte) {
                    actionOutput.innerHTML = `Unentschieden. Du & der Computer habt jeweils ${spielerPunkte} Punkte`
                } else if (spielerPunkte > computerPunkte) {
                    actionOutput.innerHTML = "Glückwunsch du hast den Computer besiegt."
                } else {
                    actionOutput.innerHTML = "Du hast verloren. Der Computer hat gewonnen 👾 Try again"
                }

                btnArea.classList.add("display-none");
            }
        }
}

// Function playGame(userChoice: string) {
// A.) FN ausführen die die random PC Choice generiert (die von Punkt 3)
// B) rundenanzahl auslesen und in einer Variablen speichern (totalRounds/ gesamtRundenAnzahl) zb:

//  const roundsInput = document.querySelector<HTMLInputElement>(
//     'input[name="num-of-rounds"]:checked'
//   );
// const gesamteRunden = Number(roundsInput.value);


// C) gesamte Runden ins HTML ausgeben
// D) aktuelleRunde hochzaehlen
// E) aktuelle Runde ins HTML ausgeben
// F) Logik um zu schauen wer gewonnen hat + die Punkte hoch zählen
// G) Spielstand ins HTML schreiben
// H) spiel beenden wenn aktuelleRunden und gesamtRunden gleich sind (zb auch noch die Btns deaktivieren)
// }

//     reset FN
// ! RESET GAME
resetBtn?.addEventListener("click", resetGame);

function resetGame() {
    // * RESET POINTS
    spielerPunkte = 0;
    computerPunkte = 0;
    aktuelleRunde = 0;

    if(gesamteRunden && 
        rundenAnzahlAuswahl && 
        rundenAnzeige && 
        gesamteRunden && 
        gespielteRunden && 
        spielstandSpieler && 
        spielstandComputer && 
        actionOutput && 
        btnArea) {

        rundenAnzeige.classList.remove("display-block");
        rundenAnzahlAuswahl.classList.remove("display-none");
        btnArea.classList.remove("display-none");

        spielstandSpieler.innerHTML = "0";
        spielstandComputer.innerHTML = "0";
        actionOutput.innerHTML = "Lass uns spielen";
}
}

// Die globalen Variablen wieder auf 0 zurueck setzen
// innerHTML auch zurücksetzen