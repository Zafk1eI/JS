let monthSelect = document.getElementById('monthSelect');
let currentDate = new Date();
let currentMonth = currentDate.getMonth() + 1;
const months = [
    "Январь", "Февраль", "Март", "Апрель",
    "Май", "Июнь", "Июль", "Август",
    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];


for (let i = 0; i < months.length; i++) {
    let option = document.createElement('option');
    option.value = i + 1;
    option.text = months[i];
    monthSelect.add(option);
}


monthSelect.value = currentMonth;