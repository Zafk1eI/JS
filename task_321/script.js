function getLastDayOfMonth(year, month) {
    let lastDay = new Date(year, month, 0).getDate();
    return lastDay;
}

let year = 2020;
let month = 4;
let lastDay = getLastDayOfMonth(year, month);
console.log(`Последний день месяца: ${lastDay}`);

function getLastDayOfWeek(year, month) {
    const lastDayOfMonth = new Date(year, month, 0);

    const dayOfWeek = lastDayOfMonth.getDay();

    return dayOfWeek;
}

let year1 = 2025;
let month1 = 4;

let lastDayOfWeek = getLastDayOfWeek(year, month);

console.log(`Последний день месяца в ${year} году будет ${lastDayOfWeek}-ым днем недели.`);
