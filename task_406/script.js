let dayOfWeekSelect = document.querySelector('#dayOfWeekSelect');
let dayTypeResult = document.querySelector('#dayTypeResult');

dayOfWeekSelect.addEventListener('change', function() {
    const selectedDay = parseInt(dayOfWeekSelect.value);
    const isWeekend = selectedDay === 6 || selectedDay === 7;

    dayTypeResult.textContent = isWeekend ? 'Это выходной день!' : 'Это рабочий день.';
});