//Deklariere die Funktion showHero(): void mit drei Parametern heroName, heroPower und heroEnemy. Im Funktionskörper {} sollst du dann Folgendes machen.

//  eklariere drei Variablen nameOutput, powerOutput und enemyOutput.

// Weise den Variablen dann diese Werte zu   a. Mein:e Lieblingsheld:in ist: xyz   b. Er/sie hat die Fähigkeit: xyz   Sein/ihr größte/r Gegner:in ist: xyz.

// Füge die Werte der übergebenen Parameter in die Variablen ein.

// Gib nameOutput + powerOutput + enemyOutput in der Konsole aus.

// Ruf deine Funktion auf.

// Übergib Argumente für deine:n Lieblingsheld:in und gib diese in der Konsole aus.

function showHero(heroName: string, heroPower: String, heroEnemy: string) {
    let nameOutput = `Mein Lieblingsheld ist: ${heroName}. `;
    let powerOutput = `Èr/Sie hat die Fähigkeit: ${heroPower}. `;
    let enemyOutput = `Sein größter Gegner ist ${heroEnemy}. `
    
    console.log(nameOutput + powerOutput + enemyOutput);
    
}

showHero("Hulk", "Wut und grüne Farbe", "Ruhe");

