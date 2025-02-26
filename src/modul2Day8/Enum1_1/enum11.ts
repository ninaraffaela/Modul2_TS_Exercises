enum Weekdays {
    Monday, 
    Tuesday, 
    Wednesday, 
    Thursday, 
    Friday, 
    Saturday, 
    Sunday 
};

console.log(Weekdays);


enum Months {
    January,
    February,
    March,
    April,
    June,
    July,
    August,
    September,
    October,
    November,
    December
};

console.log(Months);


// # how to get only the days?
// - not like that
for (const day in Weekdays) {
    console.log(day);
};

// - not loke that
for (let i=0; i < Object.values(Weekdays).length; i++){
    console.log(Object.values(Weekdays)[i]);
};