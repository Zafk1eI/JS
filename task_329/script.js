let currentDate = new Date();
let startOfDay = new Date(currentDate);
startOfDay.setHours(0, 0, 0, 0);
let timeDifference = currentDate - startOfDay;
let hoursDifference = timeDifference / (1000 * 60 * 60);
console.log(`Количество часов с начала текущего дня до текущего момента времени: ${hoursDifference} часов`);
