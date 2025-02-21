const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(list: number[]) {
    const evenNumbers = zahlen.filter((zahl) => zahl % 2 !== 1);
    console.log(evenNumbers);
};

printEvenNumbers(zahlen);



function printOddNumbers(list: number[]) {
    const oddNumbers = zahlen.filter((zahl) => zahl % 2 === 1);
    console.log(oddNumbers);
};

printOddNumbers(zahlen);



// - Schreibe die selbe Logik in Arrow Function Schreibweise