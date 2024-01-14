let output1 = document.getElementById('output1');
let startBtn1 = document.getElementById('startBtn');

let intervalId1;

startBtn1.addEventListener('click', function () {
    intervalId1 = setInterval(function () {
        output1.textContent = Number(output1.textContent) + 1;
    }, 1000);
});