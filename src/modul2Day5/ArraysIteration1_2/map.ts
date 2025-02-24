const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

const upperDrinks = drinks.map((singleDrink) => singleDrink.toUpperCase());
console.log(upperDrinks);

const iLikeDrinks = drinks.map((singleDrink) => `i like ${singleDrink}`);
console.log(iLikeDrinks);


// -Lagere die Logik für die Umwandlung jeweils in eine eigene Funktion mit Namen aus und verwende diese statt der direkten Arrow-Function Schreibweise
