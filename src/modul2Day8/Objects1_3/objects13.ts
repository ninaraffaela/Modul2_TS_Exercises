type Apple = {
    color: string;
    size: string;
  };
  
  const redApple: Apple = { color: 'red', size: 'big' };
  const greenApple: Apple = { color: 'green', size: 'small' };
  const yellowApple: Apple = { color: 'yellow', size: 'big' };
  const apples: Apple[] = [redApple, greenApple, yellowApple];




//#  Nutze eine for-Schleife, die das Array von Äpfeln durchgeht und nur die Größen aller Äpfeln in der Konsole ausgibt.
// for apple in apples {
//   console.log(apples.size);
// }


// # Nutze forEach, um die Farbe jedes Apfels auf der Konsole auszugeben
// apples.forEach(apple) {
//   console.log(apple.color)
// }


//* Verwende den Befehl length, um die Anzahl der Äpfel auszugeben
console.log(apples.length);

//* Erstelle selbst ein Objekt pinkApple vom Typ Apple und pushe es in das apples-Array
let pinkApple: Apple = { color: 'pink', size: 'medium' };
apples.push(pinkApple);


//# Füge eine neue Eigenschaft isSweet vom Typ boolean zum Typ Apple hinzu
// apples.push(isSweet: boolean);


//# Schau dir die Fehlermeldungen an und füge bei jedem Apple-Objekt die Eigenschaft isSweet hinzu