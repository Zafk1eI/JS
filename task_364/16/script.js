let numberInput = document.getElementById('numberInput');
let increaseButton = document.getElementById('increaseButton');
let decreaseButton = document.getElementById('decreaseButton');

increaseButton.addEventListener('click', function () {
    let currentValue = parseInt(numberInput.value, 10);
    if (!isNaN(currentValue)) {
        numberInput.value = Math.max(0, currentValue + 1);
    }
});

decreaseButton.addEventListener('click', function () {
    let currentValue = parseInt(numberInput.value, 10);
    if (!isNaN(currentValue) && currentValue > 0) {
        numberInput.value = currentValue - 1;
    }
});