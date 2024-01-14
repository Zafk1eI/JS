let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;

function startTimer() {
    timerId = setInterval(function () {
        let date = new Date();
        console.log(date.getMinutes() + ' ' + date.getSeconds());
    }, 1000);

    // После старта отвязываем обработчик от кнопки "start"
    start.removeEventListener('click', startTimer);
}

function stopTimer() {
    clearInterval(timerId);

    // После остановки отвязываем обработчик от кнопки "stop"
    stop.removeEventListener('click', stopTimer);

    // После остановки привязываем обработчик к кнопке "start" снова
    start.addEventListener('click', startTimer);
}

// Изначально привязываем обработчик к кнопке "start"
start.addEventListener('click', startTimer);

// Изначально привязываем обработчик к кнопке "stop"
stop.addEventListener('click', stopTimer);