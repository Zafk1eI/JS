function checkDate(year, month, day) {
    let dateToCheck = new Date(year, month, day);

    return (
        dateToCheck.getFullYear() === year &&
        dateToCheck.getMonth() === month &&
        dateToCheck.getDate() === day
    );
}

console.log(checkDate(2025, 0, 31));
console.log(checkDate(2025, 0, 32));
