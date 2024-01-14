//Задание 1
let currentDate = new Date();
let startOfDay = new Date(currentDate);
startOfDay.setHours(0, 0, 0, 0);
let timeDifference = currentDate - startOfDay;
let secondsDifference = Math.floor(timeDifference / 1000);

console.log(`Прошло секунд с начала дня до текущего момента времени: ${secondsDifference} секунд`);

//Задание 5
let threeMonthsAgo = new Date(currentDate);
threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

let yearThreeMonthsAgo = threeMonthsAgo.getFullYear();

console.log(`Год, который был три месяца назад: ${yearThreeMonthsAgo}`);

//Задание 2
let endOfDay = new Date(currentDate);
endOfDay.setHours(23, 59, 59, 999);

let Diff = endOfDay - currentDate;

let secondsRemaining = Math.floor(Diff / 1000);

console.log(`Осталось секунд до конца дня: ${secondsRemaining} секунд`);

//Задание 9
function findNextLeapYear() {
    let currentYear = new Date().getFullYear();

    while (true) {
        currentYear++;

        // Проверяем, является ли год високосным
        if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0)) {
            return currentYear;
        }
    }
}

const nextLeapYear = findNextLeapYear();
console.log(`Следующий високосный год: ${nextLeapYear}`);


