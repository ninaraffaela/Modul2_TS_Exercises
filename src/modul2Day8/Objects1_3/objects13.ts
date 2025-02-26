type Apple = {
    color: string;
    size: string;
    isSweet: boolean;
  };
  
  const redApple: Apple = { color: 'red', size: 'big', isSweet: true};
  const greenApple: Apple = { color: 'green', size: 'small', isSweet: false
  };
  const yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: true };
  const apples: Apple[] = [redApple, greenApple, yellowApple];




//* Nutze eine for-Schleife, die das Array von Äpfeln durchgeht und nur die Größen aller Äpfeln in der Konsole ausgibt.
// index starts with 0, through all . index smaller apples length . log apples[i]
for (let i = 0; i < apples.length; i++) {
  console.log(apples[i].size);
  
}


// * Nutze forEach, um die Farbe jedes Apfels auf der Konsole auszugeben
apples.forEach((apple) => console.log(apple.color));

apples.forEach((apple) => {
  console.log(apple.color)
});


//* Verwende den Befehl length, um die Anzahl der Äpfel auszugeben
console.log(apples.length);

//* Erstelle selbst ein Objekt pinkApple vom Typ Apple und pushe es in das apples-Array
let pinkApple: Apple = { color: 'pink', size: 'medium', isSweet: true};
apples.push(pinkApple);


