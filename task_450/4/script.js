let input4 = document.getElementById('input4');
let output4 = document.getElementById('output4');
let intervalId4;

input4.addEventListener('blur', function () {
    let countDownValue = Number(input4.value);
    intervalId4 = setInterval(function () {
        if (countDownValue >= 0) {
            output4.textContent = countDownValue;
            countDownValue--;
        } else {
            clearInterval(intervalId4);
        }
    }, 1000);
});