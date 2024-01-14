let currentDate = new Date();

let januaryFirst = new Date(currentDate.getFullYear(), 0, 1);

let septemberTenth = new Date(currentDate.getFullYear(), 8, 10);

let timeDifference = septemberTenth - januaryFirst;

let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log(`Количество дней между 1 января и 10 сентября текущего года: ${daysDifference} дней`);
