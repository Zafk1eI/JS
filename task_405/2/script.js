let yearSelect = document.querySelector('#yearSelect');
let leapYearResult = document.querySelector('#leapYearResult');

yearSelect.addEventListener('change', function() {
    const selectedYear = parseInt(yearSelect.value);
    const isLeapYear = (selectedYear % 4 === 0 && selectedYear % 100 !== 0) || (selectedYear % 400 === 0);

    leapYearResult.textContent = isLeapYear ? 'Этот год високосный!' : 'Этот год не високосный.';
});