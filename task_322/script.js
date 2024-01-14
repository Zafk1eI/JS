function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

let yearToCheck = 2024;

if (isLeap(yearToCheck)) {
    console.log(`${yearToCheck} год - високосный.`);
} else {
    console.log(`${yearToCheck} год - обычный.`);
}