let yearElements = document.querySelectorAll('ul li');
let sumOfYears = 0;

for (let yearElement of yearElements) {
    let year = parseInt(yearElement.textContent);

    if (calculateDigitsSum(year) === 6) {
        sumOfYears += year;
    }
}

console.log("Года, сумма цифр которых равна 6:", sumOfYears);

function calculateDigitsSum(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}
