let date1 = new Date(2000, 8, 1); // 1 сентября 2000 года
let date2 = new Date(2010, 1, 15); // 15 февраля 2010 года
//Задание 1-2
let diff = (date2 - date1 / (1000 * 60 * 60 * 24));
console.log("Разница в днях: " + diff); 

//Задание 3
let diffYears = date2.getFullYear() - date1.getFullYear();
let diffMonths = date2.getMonth() - date1.getMonth();

let totalDiff = diffYears * 12 + diffMonths;

console.log("Разницав месяцах: " + totalDiff);

//Задание 4
console.log("Разница в годах" + diffYears);
