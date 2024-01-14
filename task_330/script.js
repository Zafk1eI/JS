let currentDate = new Date();
let endOfDay = new Date(currentDate);
endOfDay.setHours(23, 59, 59, 999);
let timeDifference = endOfDay - currentDate;
let hoursRemaining = Math.round(timeDifference / (1000 * 60 * 60));
console.log(`Осталось часов до конца дня: ${hoursRemaining} часов`);
