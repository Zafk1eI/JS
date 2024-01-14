let output2 = document.getElementById('output2');
let startBtn2 = document.getElementById('startBtn2');

let intervalId2;

startBtn2.addEventListener('click', function () {
    intervalId2 = setInterval(function () {
        let currentValue = Number(output2.textContent);
        if (currentValue > 0) {
            output2.textContent = currentValue - 1;
        } else {
            clearInterval(intervalId2);
        }
    }, 1000);
});