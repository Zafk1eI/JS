let input5 = document.getElementById('input5');
let startBtn5 = document.getElementById('startBtn5');
let output5 = document.getElementById('output5');
let intervalId5;

startBtn5.addEventListener('click', function () {
    let countDownValue = Number(input5.value);
    intervalId5 = setInterval(function () {
        if (countDownValue >= 0) {
            output5.textContent = countDownValue;
            countDownValue--;
        } else {
            clearInterval(intervalId5);
        }
    }, 1000);
});