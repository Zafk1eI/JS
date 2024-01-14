let currentDate = new Date();
let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
let twentiethOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 20);
let tenthOfNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 10);
if (currentDate.getDate() > 20) {
    tenthOfNextMonth.setMonth(tenthOfNextMonth.getMonth() + 1);
}
let timeDifference = tenthOfNextMonth - twentiethOfCurrentMonth;
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log(`Количество дней между 20 числом текущего месяца и 10 числом следующего месяца: ${daysDifference} дней`);
