let currentDate = new Date();
let noonToday = new Date();
noonToday.setHours(12, 0, 0, 0);

if (currentDate < noonToday) {
    console.log('Еще не полдень.');
} else if (currentDate > noonToday) {
    console.log('Уже полдень.');
} else {
    console.log('Сейчас полдень.');
}

let middleOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 15);

console.log(currentDate > middleOfMonth);
