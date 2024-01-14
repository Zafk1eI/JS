let currentDate = new Date();
let yesterday = new Date(currentDate);
yesterday.setDate(currentDate.getDate() - 1);
yesterday.setHours(12, 0, 0, 0);
let timeDifference = currentDate - yesterday;
let hoursDifference = timeDifference / (1000 * 60 * 60);
console.log(`Количество часов между вчерашним полднем и текущим моментом времени: ${hoursDifference} часов`);
