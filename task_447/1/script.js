let count = 100;
let timer;

document.getElementById('startButton').addEventListener('click', function () {
    if (!timer) {
        timer = setInterval(function () {
            console.log(count);

            if (count === 0) {
                clearInterval(timer);
                timer = null;
            } else {
                count--;
            }
        }, 1000);
    }
});

document.getElementById('stopButton').addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
});