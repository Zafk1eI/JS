let dayOfWeekSelect = document.getElementById('dayOfWeekSelect');
let currentDate = new Date();
let currentDay = currentDate.getDay(); 
const daysOfWeek = [
    "Воскресенье", "Понедельник", "Вторник", "Среда",
    "Четверг", "Пятница", "Суббота"
];

for (let i = 0; i < daysOfWeek.length; i++) {
    let option = document.createElement('option');
    option.value = i + 1; 
    option.text = daysOfWeek[i];
    dayOfWeekSelect.add(option);
}

dayOfWeekSelect.value = currentDay + 1; 