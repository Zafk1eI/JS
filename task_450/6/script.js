let output6 = document.getElementById('output6');
let startBtn6 = document.getElementById('startBtn6');
let stopBtn6 = document.getElementById('stopBtn6');
let intervalId6;

startBtn6.addEventListener('click', function () {
    intervalId6 = setInterval(function () {
        output6.textContent = Number(output6.textContent) + 1;
    }, 1000);
});

stopBtn6.addEventListener('click', function () {
    clearInterval(intervalId6);
});