let dateInput = document.getElementById('dateInput');
let dayOfWeekParagraph = document.getElementById('dayOfWeek');

dateInput.addEventListener('blur', function () {
    let inputDateValue = dateInput.value;
    let datePattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    if (datePattern.test(inputDateValue)) {
        let [day, month, year] = inputDateValue.split('.');
        let dateObject = new Date(`${year}-${month}-${day}`);
        let options = { weekday: 'long' };
        let dayOfWeek = new Intl.DateTimeFormat('ru-RU', options).format(dateObject);

        dayOfWeekParagraph.textContent = `День недели: ${dayOfWeek}`;
    } else {
        dayOfWeekParagraph.textContent = 'Некорректный формат даты';
    }
});